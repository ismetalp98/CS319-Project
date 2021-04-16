package com.pire.api.dto.account;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.pire.api.domain.Group;
import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class StudentView {
	@NotBlank
	@Email
	private String email;
	
	@NotNull
	private Integer studentid;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String surname;
	
	private GroupView group;
	
}
