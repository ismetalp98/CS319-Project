package com.pire.api.dto.account;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class AddStudentDto {
	
	@NotBlank
	private String groupname;
	
	@NotBlank
	private String studentEmail;

}
