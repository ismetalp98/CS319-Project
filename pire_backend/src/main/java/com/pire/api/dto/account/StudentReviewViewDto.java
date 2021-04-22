package com.pire.api.dto.account;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class StudentReviewViewDto {
	@NotBlank
	@Email
	private String email;
	
	@NotNull
	private Integer studentid;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String surname;
	
}
