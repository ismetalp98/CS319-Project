package com.pire.api.servise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pire.api.domain.Instructor;
import com.pire.api.domain.PeerEvaluationPeriod;
import com.pire.api.dto.account.CreateInstructorDto;
import com.pire.api.dto.account.InstructorLoginDto;
import com.pire.api.dto.account.InstructorView;
import com.pire.api.exception.AlreadyExsitException;
import com.pire.api.exception.NotFoundException;
import com.pire.api.mapper.InstructorMapper;
import com.pire.api.repository.InstructorRepository;
import com.pire.api.repository.PeerEvaluationPeriodRepository;

@Service
public class InstructorService {
	@Autowired
	InstructorRepository repository;

	@Autowired
	InstructorMapper mapper;

	@Autowired
	PeerEvaluationPeriodRepository evaluationPeriodRepository;

	public InstructorView createInstructor(CreateInstructorDto dto) {
		repository.findByEmail(dto.getEmail()).ifPresent(d -> {
			throw new AlreadyExsitException("Instructor already exsist", "Student", "Email");
		});

		Instructor instructor = mapper.getInstructorFromCreateInstructorDto(dto);

		Instructor instructorsaved = repository.save(instructor);

		InstructorView instructorView = mapper.getInstructorViewFromInstructor(instructorsaved);
		return instructorView;
	}

	public InstructorLoginDto login(String email) {
		try {
			Instructor instructor = repository.findByEmail(email).get();
			return mapper.getInstructorLoginDtoFromInstructor(instructor);
		} catch (Exception e) {
			throw new NotFoundException("Email or password is wrong");
		}
	}

	public InstructorView findByEmail(String email) {
		Instructor inst = repository.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("Instructor not found"));

		return mapper.getInstructorViewFromInstructor(inst);
	}

	public PeerEvaluationPeriod getPeerEvaluationPeriod() {
		return evaluationPeriodRepository.findById(1).get();
	}

	public PeerEvaluationPeriod reverseEvaluationPeriod() {
		PeerEvaluationPeriod period = evaluationPeriodRepository.findById(1).get();

		period.setActive(!period.getActive());

		evaluationPeriodRepository.save(period);

		return period;
	}

}
