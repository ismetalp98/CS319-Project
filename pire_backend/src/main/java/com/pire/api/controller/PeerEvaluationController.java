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

import com.pire.api.dto.poll.CreatePeerEvaluationDto;
import com.pire.api.dto.poll.PeerEvaluationView;
import com.pire.api.servise.PeerEvaluationService;

/**
 * This class responseable from answer http call about peer evaluation
 * @author atesel
 *
 */
@RestController
@RequestMapping(path = "api/peerevaluation")
public class PeerEvaluationController {

	@Autowired
	PeerEvaluationService service;

	/**
	 * Answers http request of create new peer evaluation
	 * @param dto
	 * @return
	 */
	@PostMapping("/create")
	public ResponseEntity<PeerEvaluationView> addPeerEvaluation(@RequestBody @Valid CreatePeerEvaluationDto dto) {
		return ResponseEntity.ok(service.createPeerEvaluation(dto));
	}

	/**
	 * Answers the http request of getting evalutions about given group name
	 * @param groupname
	 * @return
	 */
	@GetMapping("/getByGroupName/{groupname}")
	public ResponseEntity<List<PeerEvaluationView>> getByGroupName(
			@PathVariable(name = "groupname", required = true) String groupname) {
		return ResponseEntity.ok(service.getGroupPeerEvaluation(groupname));
	}
}
