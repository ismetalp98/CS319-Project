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

import com.pire.api.dto.account.CreateStudentDto;
import com.pire.api.dto.account.StudentIntructorView;
import com.pire.api.dto.account.StudentLeaveGroupDto;
import com.pire.api.dto.account.StudentListView;
import com.pire.api.dto.account.StudentLoginDto;
import com.pire.api.dto.account.StudentView;
import com.pire.api.mapper.StudentMapper;
import com.pire.api.servise.StudentService;

/**
 *  This class responseable from answer http calls about student object
 * @author atesel
 *
 */
@RestController
@RequestMapping(path = "api/student")
public class StudentController {

	@Autowired
	StudentService service;

	@Autowired
	StudentMapper mapper;

	/**
	 * answers the http request about creating a new student
	 * @param dto
	 * @return
	 */
	@PostMapping("/create")
	public ResponseEntity<StudentView> createStudent(@RequestBody @Valid CreateStudentDto dto) {
		return ResponseEntity.ok().body(service.createStudent(dto));
	}

	/**
	 * answers the http request about login student
	 * @param email
	 * @return
	 */
	@GetMapping("/login/{email}")
	public ResponseEntity<StudentLoginDto> login(@PathVariable(name = "email", required = true) String email) {
		return ResponseEntity.ok(service.userLogin(email));
	}


	/**
	 * answers the http request about finding student informaiton with given email
	 * @param email
	 * @return
	 */
	@GetMapping("/{email}")
	public ResponseEntity<StudentView> findByEmail(@PathVariable(name = "email", required = true) String email) {
		return ResponseEntity.ok(service.findByEmail(email));
	}

	/**
	 * answers the http request about getting list of stundet
	 * @return
	 */
	@GetMapping("/getAllList")
	public ResponseEntity<List<StudentListView>> getAllList() {
		return ResponseEntity.ok(service.getAllStudentList());
	}

	/**
	 * answers the http request about student for insrtuctor view which contains peer evaluation as well
	 * @param email
	 * @return
	 */
	@GetMapping("/getinstructorview/{email}")
	public ResponseEntity<StudentIntructorView> findByEmailInsructorView(
			@PathVariable(name = "email", required = true) String email) {
		return ResponseEntity.ok(service.getStudentIntructorView(email));
	}

	/**
	 * answers the http request about student leave group
	 * @param dto
	 * @return
	 */
	@PostMapping("/leaveGroup")
	public ResponseEntity<StudentView> leaveGroup(@RequestBody @Valid StudentLeaveGroupDto dto) {
		return ResponseEntity.ok(service.leaveGroup(dto));
	}
}
