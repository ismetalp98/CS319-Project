package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.Instructor;
import com.pire.api.dto.account.CreateInstructorDto;
import com.pire.api.dto.account.InstructorLoginDto;
import com.pire.api.dto.account.InstructorView;

/**
 * this class maps the Instructor object and Instructor object like objects such as create Instructor dto etc.
 * @author atesel
 *
 */
@Mapper
public abstract class InstructorMapper {

	/**
	 * Map Instructor and create Instructor dto
	 * @param dto
	 * @return Instructor
	 */
	public abstract Instructor getInstructorFromCreateInstructorDto(CreateInstructorDto dto);
	
	/**
	 * Map Instructor view and instructor 
	 * @param instructor
	 * @return InstructorView
	 */
	public abstract InstructorView getInstructorViewFromInstructor(Instructor instructor);
	
	/**
	 * Map Instructor login dto and Instructor
	 * @param instructor
	 * @return InstructorLoginDto
	 */
	public abstract InstructorLoginDto getInstructorLoginDtoFromInstructor(Instructor instructor);
}
