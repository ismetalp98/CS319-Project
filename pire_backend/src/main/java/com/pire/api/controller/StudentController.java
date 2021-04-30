package com.pire.api.controller;

import java.util.List;

import javax.validation.ReportAsSingleViolation;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pire.api.dto.account.CreateStudentDto;
import com.pire.api.dto.account.StudentListView;
import com.pire.api.dto.account.StudentLoginDto;
import com.pire.api.dto.account.StudentView;
import com.pire.api.mapper.StudentMapper;
import com.pire.api.servise.StudentService;

@RestController
@RequestMapping(path = "api/student")
public class StudentController {

	@Autowired
	StudentService service;
	
	@Autowired
	StudentMapper mapper;
	
	@PostMapping("/create")
	public ResponseEntity<StudentView> createStudent(@RequestBody @Valid CreateStudentDto dto){
		return ResponseEntity.ok().body(service.createStudent(dto));
	}
	
	@GetMapping("/login/{email}")
	public ResponseEntity<StudentLoginDto> login(
			@PathVariable(name = "email", required = true) String email)
	{
		return ResponseEntity.ok(service.userLogin(email));
	}
	
	@GetMapping("/{email}")
	public ResponseEntity<StudentView> findByEmail(
			@PathVariable(name = "email", required = true) String email)
	{
		return ResponseEntity.ok(service.findByEmail(email));
	}
	
	@GetMapping("/getAllList")
	public ResponseEntity<List<StudentListView>> getAllList(){
		return ResponseEntity.ok(service.getAllStudentList());
	}
	
}
