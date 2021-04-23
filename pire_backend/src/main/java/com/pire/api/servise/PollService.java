package com.pire.api.servise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pire.api.domain.Poll;
import com.pire.api.domain.PollAnswer;
import com.pire.api.domain.PollQuestion;
import com.pire.api.domain.Student;
import com.pire.api.dto.poll.CreatePollAnswerDto;
import com.pire.api.dto.poll.CreatePollDto;
import com.pire.api.dto.poll.CreatePollQuestionDto;
import com.pire.api.dto.poll.PollAnswerView;
import com.pire.api.dto.poll.PollQuestionView;
import com.pire.api.dto.poll.PollView;
import com.pire.api.exception.NotFoundException;
import com.pire.api.mapper.PollAnswerMapper;
import com.pire.api.mapper.PollMapper;
import com.pire.api.mapper.PollQuestionMapper;
import com.pire.api.repository.PollAnswerRepository;
import com.pire.api.repository.PollQuestionRepository;
import com.pire.api.repository.PollRepository;
import com.pire.api.repository.StudentRepository;

@Service
public class PollService {

	@Autowired 
	PollRepository pollRepository;
	
	@Autowired
	PollQuestionRepository pollQuestionRepository;
	
	@Autowired 
	PollAnswerRepository pollAnswerRepository;
	
	
	@Autowired
	PollMapper pollMapper;
	
	@Autowired 
	PollQuestionMapper pollQuestionMapper;
	
	@Autowired
	PollAnswerMapper pollAnswerMapper;
	
	@Autowired
	StudentRepository studentRepository;
	
	public PollView createPoll(CreatePollDto dto) {
		Poll poll = pollMapper.getPollFromCreatePollDto(dto);
		
		return pollMapper.getPollViewFromPoll(pollRepository.save(poll));
	}
	
	public PollQuestionView createPollQuestion(CreatePollQuestionDto dto) {
		
		Poll poll = pollRepository.findById(dto.getPollId()).orElseThrow(
				() -> new NotFoundException("Poll not found")
		);
		
		PollQuestion pollQuestion = pollQuestionMapper.getPollQuestionFromCreatePollQuestionDto(dto);
		
		poll.addQuestion(pollQuestion);
		
		pollRepository.save(poll);
		
		return pollQuestionMapper.getPollQuestionViewFromPollQuestion(pollQuestion);
	}
	
	
	public PollAnswerView createPollAnswer(CreatePollAnswerDto dto) {
		PollQuestion pollQuesiton = pollQuestionRepository.findById(dto.getPollQuestionId()).orElseThrow(
				() -> new NotFoundException("Poll question not found")
		);
		
		
		PollAnswer pollAnswer = pollAnswerMapper.getPollAnswerFromCreatePollAnswerDto(dto);
		
		Student student = studentRepository.findByEmail(dto.getStudentEmail()).orElseThrow(
				() -> new NotFoundException("Student not found")
		);
		
		pollQuesiton.addAnswer(pollAnswer);
		student.addAnswer(pollAnswer);
		
		studentRepository.save(student);
		pollQuestionRepository.save(pollQuesiton);
		
		return pollAnswerMapper.getPollAnswerViewFrom(pollAnswer);
	}
	
	public PollView getPollById(Integer id) {
		try {
			Poll poll = pollRepository.findById(id).get();
			return pollMapper.getPollViewFromPoll(poll);
		} catch (Exception e) {
			throw new NotFoundException("Poll not found");
		}
	}
	
}
