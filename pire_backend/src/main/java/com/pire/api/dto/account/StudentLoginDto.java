package com.pire.api.dto.account;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class StudentLoginDto {

	@NotBlank
	private String email;
	
	@NotBlank
	private String password;
	
}
