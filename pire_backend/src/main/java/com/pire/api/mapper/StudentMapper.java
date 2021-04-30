package com.pire.api.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.pire.api.domain.Student;
import com.pire.api.dto.account.CreateStudentDto;
import com.pire.api.dto.account.StudentGroupDto;
import com.pire.api.dto.account.StudentListView;
import com.pire.api.dto.account.StudentLoginDto;
import com.pire.api.dto.account.StudentReviewViewDto;
import com.pire.api.dto.account.StudentView;

@Mapper
public abstract class StudentMapper {
	
	public abstract Student getStudentFromCreateStudentDto(CreateStudentDto dto);
	
	public abstract StudentView getStudentViewFromStudent(Student student);
	
	public abstract StudentLoginDto getStudentLoginDtoFromStudent(Student student);
	
	public abstract StudentGroupDto getStudentGroupDtoFromStudent(Student student);
	
	public abstract StudentReviewViewDto getStudentReviewViewDtoFromStudent(Student student);
	
	public abstract List<StudentListView> getStudentListViewFromStudentList(List<Student> studentList);

}
