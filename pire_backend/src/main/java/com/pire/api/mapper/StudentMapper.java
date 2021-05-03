package com.pire.api.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.pire.api.domain.Student;
import com.pire.api.dto.account.CreateStudentDto;
import com.pire.api.dto.account.StudentGroupDto;
import com.pire.api.dto.account.StudentIntructorView;
import com.pire.api.dto.account.StudentListView;
import com.pire.api.dto.account.StudentLoginDto;
import com.pire.api.dto.account.StudentReviewViewDto;
import com.pire.api.dto.account.StudentView;
/**
 * this class maps the student object and student  object like objects such as create student dto etc.
 * @author atesel
 *
 */
@Mapper
public abstract class StudentMapper {
	
	/**
	 * Map student with create student dto
	 * @param dto
	 * @return Student
	 */
	public abstract Student getStudentFromCreateStudentDto(CreateStudentDto dto);
	
	/**
	 * Mpa student view and student
	 * @param student
	 * @return StudentView
	 */
	public abstract StudentView getStudentViewFromStudent(Student student);
	
	/**
	 * Map student login dto and student
	 * @param student
	 * @return StudentLoginDto
	 */
	public abstract StudentLoginDto getStudentLoginDtoFromStudent(Student student);
	
	/**
	 * Map student group dto and student
	 * @param student
	 * @return StudentGroupDto
	 */
	public abstract StudentGroupDto getStudentGroupDtoFromStudent(Student student);
	
	/**
	 * Map student review view dto and student
	 * @param student
	 * @return StudentReviewViewDto
	 */
	public abstract StudentReviewViewDto getStudentReviewViewDtoFromStudent(Student student);
	
	/**
	 * map list of student list view and lsit of student
	 * @param studentList
	 * @return List<StudentListView>
	 */
	public abstract List<StudentListView> getStudentListViewFromStudentList(List<Student> studentList);
	
	/**
	 * Map student insturctor view and student
	 * @param student
	 * @return StudentIntructorView
	 */
	public abstract StudentIntructorView getStudentIntructorViewFromStudent(Student student);

}
