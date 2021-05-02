package com.pire.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pire.api.domain.PeerEvaluationPeriod;
import com.pire.api.dto.account.CreateInstructorDto;
import com.pire.api.dto.account.InstructorLoginDto;
import com.pire.api.dto.account.InstructorView;
import com.pire.api.dto.account.StudentView;
import com.pire.api.servise.InstructorService;

@RestController
@RequestMapping(path = "api/instructor")
@CrossOrigin("*")
public class InstructorController {

	@Autowired
	InstructorService service;

	@PostMapping("/create")
	public ResponseEntity<InstructorView> createInstructor(@RequestBody @Valid CreateInstructorDto dto) {
		return ResponseEntity.ok().body(service.createInstructor(dto));
	}

	@GetMapping("/login/{email}")
	public ResponseEntity<InstructorLoginDto> login(@PathVariable(name = "email", required = true) String email) {
		return ResponseEntity.ok(service.login(email));
	}

	@GetMapping("/{email}")
	public ResponseEntity<InstructorView> findByEmail(@PathVariable(name = "email", required = true) String email) {
		return ResponseEntity.ok(service.findByEmail(email));
	}

	@GetMapping("/evaluationPeriod")
	public ResponseEntity<PeerEvaluationPeriod> getEvalutaitonPeriod() {
		return ResponseEntity.ok(service.getPeerEvaluationPeriod());
	}

	@PostMapping("/reverseEvaluationPeriod")
	public ResponseEntity<PeerEvaluationPeriod> reverseEvalutaitonPeriod() {
		return ResponseEntity.ok(service.reverseEvaluationPeriod());
	}
}
