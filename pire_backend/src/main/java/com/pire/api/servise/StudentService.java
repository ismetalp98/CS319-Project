package com.pire.api.servise;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pire.api.domain.Group;
import com.pire.api.domain.Student;
import com.pire.api.dto.account.CreateStudentDto;
import com.pire.api.dto.account.StudentIntructorView;
import com.pire.api.dto.account.StudentLeaveGroupDto;
import com.pire.api.dto.account.StudentListView;
import com.pire.api.dto.account.StudentLoginDto;
import com.pire.api.dto.account.StudentView;
import com.pire.api.exception.AlreadyExsitException;
import com.pire.api.exception.NotFoundException;
import com.pire.api.mapper.StudentMapper;
import com.pire.api.repository.GroupRepository;
import com.pire.api.repository.StudentRepository;

/**
 * Handle all databse operation of student and return the resund to the controller
 * @author atesel
 *
 */
@Service
public class StudentService {
	
	@Autowired
	StudentMapper mapper;

	@Autowired
	StudentRepository  repository;
	
	@Autowired 
	GroupRepository groupRepository;
	
	/**
	 * create new stdent and save it to database
	 * @param dto
	 * @return StudentView
	 */
	public StudentView createStudent(CreateStudentDto  dto) {
		repository.findByEmail(dto.getEmail()).ifPresent( d -> {
			throw new AlreadyExsitException("Email already exsist", "Student", "Email");
		});
		
		Student student = mapper.getStudentFromCreateStudentDto(dto);
		
		repository.save(student);
		
		return mapper.getStudentViewFromStudent(student);
	}
	/**
	 * return user login information
	 * @param email
	 * @return StudentLoginDto
	 */
	public StudentLoginDto userLogin(String email) {
		try {
			
			Student student = repository.findByEmail(email).get();
			return mapper.getStudentLoginDtoFromStudent(student);
		
		} catch (Exception e) {
			throw new NotFoundException("Email or password is wrong");
		}
	}
	
	/**
	 * return student which is find by given email
	 * @param email
	 * @return StudentView
	 */
	public StudentView findByEmail(String email)
	{
		Student student = repository.findByEmail(email).orElseThrow(() -> new NotFoundException("Student not found."));
		
		return mapper.getStudentViewFromStudent(student);
	}
	
	/**
	 * return all student in list view
	 * @return List<StudentListView> 
	 */
	public List<StudentListView> getAllStudentList(){
		List<Student> studentList = repository.findAll();
		
		List<StudentListView> listView = mapper.getStudentListViewFromStudentList(studentList);
		
		return listView;
	}
	
	/**
	 * find student by emain and return the view of instructor
	 * @param studentemail
	 * @return StudentIntructorView
	 */
	public StudentIntructorView getStudentIntructorView(String studentemail) {
		Student student = repository.findByEmail(studentemail).orElseThrow(() -> new NotFoundException("Student not found."));
		
		return mapper.getStudentIntructorViewFromStudent(student);
	}
	
	/**
	 * remvoe student from a group
	 * @param dto
	 * @return StudentView
	 */ 
	public StudentView leaveGroup(StudentLeaveGroupDto dto) {
		Student student = repository.findByEmail(dto.getEmail()).orElseThrow(() -> new NotFoundException("Student not found."));
		
		Group group = groupRepository.findGroupByName(student.getGroup().getName())
				.orElseThrow(() -> new NotFoundException("Student don't game any group."));
		
		group.removeStudent(student);
		
		repository.save(student);
		
		return mapper.getStudentViewFromStudent(student);
	}
	
}
