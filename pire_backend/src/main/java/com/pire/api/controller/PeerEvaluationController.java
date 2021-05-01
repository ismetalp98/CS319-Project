package com.pire.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pire.api.dto.poll.CreatePeerEvaluationDto;
import com.pire.api.dto.poll.PeerEvaluationView;
import com.pire.api.servise.PeerEvaluationService;

@RestController
@RequestMapping(path = "api/peerevaluation")
public class PeerEvaluationController {
	
	 @Autowired
	 PeerEvaluationService service;
	 
	 @PostMapping("/create")
	 public ResponseEntity<PeerEvaluationView> addPeerEvaluation(@RequestBody @Valid CreatePeerEvaluationDto dto){
		 return ResponseEntity.ok(service.createPeerEvaluation(dto));
	 }
}
