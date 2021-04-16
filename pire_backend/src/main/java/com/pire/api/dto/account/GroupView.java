package com.pire.api.dto.account;

import java.util.List;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class GroupView {
	@NotBlank
	private String name;
	
	private List<StudentGroupDto> students;
}
