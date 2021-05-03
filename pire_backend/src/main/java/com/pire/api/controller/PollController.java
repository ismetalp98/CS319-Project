package com.pire.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pire.api.dto.poll.CreatePollAnswerDto;
import com.pire.api.dto.poll.CreatePollDto;
import com.pire.api.dto.poll.CreatePollQuestionDto;
import com.pire.api.dto.poll.PollAnswerView;
import com.pire.api.dto.poll.PollListView;
import com.pire.api.dto.poll.PollQuestionView;
import com.pire.api.dto.poll.PollView;
import com.pire.api.servise.PollService;

/**
 * This class responseable from answer http call about polls
 * @author atesel
 *
 */
@RestController
@RequestMapping(path = "api/poll")
public class PollController {
	
	@Autowired
	PollService service;
	
	/**
	 * answers the http request about creaing new poll 
	 * @param dto
	 * @return
	 */
	@PostMapping("/createPoll")
	public ResponseEntity<PollView> createPoll(@RequestBody @Valid CreatePollDto dto){
		return ResponseEntity.ok(service.createPoll(dto));
	}
	
	/**
	 * answers the http request about create poll question
	 * @param dto
	 * @return
	 */
	@PostMapping("/createPollQuestion")
	public ResponseEntity<PollQuestionView> createPollQuestion(@RequestBody @Valid CreatePollQuestionDto dto){
		return ResponseEntity.ok(service.createPollQuestion(dto));
	}
	
	/**
	 * answers the http request about creating poll answers
	 * @param dto
	 * @return
	 */
	@PostMapping("/createPollAnswer")
	public ResponseEntity<PollAnswerView> createPollAnswer(@RequestBody @Valid CreatePollAnswerDto dto){
		return ResponseEntity.ok(service.createPollAnswer(dto));
	}
	
	/**
	 * answers the http request about find poll by id
	 * @param id
	 * @return
	 */
	@GetMapping("/{id}")
	public ResponseEntity<PollView> findById(
			@PathVariable(name = "id", required = true) Integer id)
	{
		return ResponseEntity.ok(service.getPollById(id));
	}
	
	/**
	 * answers the http request about getting all polls with name
	 * @return
	 */
	@GetMapping("/getAll")
	public ResponseEntity<List<PollView>> findAll()
	{
		return ResponseEntity.ok(service.getAll());
	}
	
	/**
	 * answers the http request about find all answers which is releted to the given poll id
	 * @return
	 */
	@GetMapping("/getAllListView")
	public ResponseEntity<List<PollListView>> findAllListView()
	{
		return ResponseEntity.ok(service.getAllList());
	}
	

}
