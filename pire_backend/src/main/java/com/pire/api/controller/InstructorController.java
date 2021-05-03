package com.pire.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pire.api.domain.PeerEvaluationPeriod;
import com.pire.api.dto.account.CreateInstructorDto;
import com.pire.api.dto.account.InstructorLoginDto;
import com.pire.api.dto.account.InstructorView;
import com.pire.api.servise.InstructorService;

/**
 * This class answers the http request which is releted with the instructor
 * @author atesel
 *
 */
@RestController
@RequestMapping(path = "api/instructor")
@CrossOrigin("*")
public class InstructorController {

	@Autowired
	InstructorService service;

	/**
	 * Answers the create new insructor http request.
	 * @param dto
	 * @return
	 */
	@PostMapping("/create")
	public ResponseEntity<InstructorView> createInstructor(@RequestBody @Valid CreateInstructorDto dto) {
		return ResponseEntity.ok().body(service.createInstructor(dto));
	}

	/**
	 * This called when the insructor is tried to login. This return the login information
	 * @param email
	 * @return
	 */
	@GetMapping("/login/{email}")
	public ResponseEntity<InstructorLoginDto> login(@PathVariable(name = "email", required = true) String email) {
		return ResponseEntity.ok(service.login(email));
	}

	/**
	 * Answers the http get http request of the insructor 
	 * @param email
	 * @return
	 */
	@GetMapping("/{email}")
	public ResponseEntity<InstructorView> findByEmail(@PathVariable(name = "email", required = true) String email) {
		return ResponseEntity.ok(service.findByEmail(email));
	}

	@GetMapping("/evaluationPeriod")
	public ResponseEntity<PeerEvaluationPeriod> getEvalutaitonPeriod() {
		return ResponseEntity.ok(service.getPeerEvaluationPeriod());
	}

	/**
	 * this answer the http request about revers evaluatioın period
	 * @return
	 */
	@PostMapping("/reverseEvaluationPeriod")
	public ResponseEntity<PeerEvaluationPeriod> reverseEvalutaitonPeriod() {
		return ResponseEntity.ok(service.reverseEvaluationPeriod());
	}
}
