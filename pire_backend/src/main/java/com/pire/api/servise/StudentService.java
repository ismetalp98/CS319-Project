package com.pire.api.servise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pire.api.domain.Student;
import com.pire.api.dto.account.CreateStudentDto;
import com.pire.api.dto.account.StudentLoginDto;
import com.pire.api.dto.account.StudentView;
import com.pire.api.exception.AlreadyExsitException;
import com.pire.api.exception.NotFoundException;
import com.pire.api.mapper.StudentMapper;
import com.pire.api.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentMapper mapper;

	@Autowired
	StudentRepository  repository;
	
	public StudentView createStudent(CreateStudentDto  dto) {
		repository.findByEmail(dto.getEmail()).ifPresent( d -> {
			throw new AlreadyExsitException("Email already exsist", "Student", "Email");
		});
		
		Student student = mapper.getStudentFromCreateStudentDto(dto);
		
		repository.save(student);
		
		return mapper.getStudentViewFromStudent(student);
	}
	
	public StudentLoginDto userLogin(String email) {
		try {
			
			Student student = repository.findByEmail(email).get();
			return mapper.getStudentLoginDtoFromStudent(student);
		
		} catch (Exception e) {
			throw new NotFoundException("Email or password is wrong");
		}
	}
	
	public StudentView findByEmail(String email)
	{
		Student student = repository.findByEmail(email).orElseThrow(() -> new NotFoundException("Student not found."));
		
		return mapper.getStudentViewFromStudent(student);
	}
}
