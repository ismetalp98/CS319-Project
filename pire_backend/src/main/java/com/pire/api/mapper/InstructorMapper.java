package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.Instructor;
import com.pire.api.dto.account.CreateInstructorDto;
import com.pire.api.dto.account.InstructorLoginDto;
import com.pire.api.dto.account.InstructorView;

@Mapper
public abstract class InstructorMapper {

	public abstract Instructor getInstructorFromCreateInstructorDto(CreateInstructorDto dto);
	
	public abstract InstructorView getInstructorViewFromInstructor(Instructor instructor);
	
	public abstract InstructorLoginDto getInstructorLoginDtoFromInstructor(Instructor instructor);
}
