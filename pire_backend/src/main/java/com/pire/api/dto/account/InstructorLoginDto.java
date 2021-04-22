package com.pire.api.dto.account;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class InstructorLoginDto {
	
	@NotBlank
	@Email
	String email;
	
	@NotBlank
	String password;
}
