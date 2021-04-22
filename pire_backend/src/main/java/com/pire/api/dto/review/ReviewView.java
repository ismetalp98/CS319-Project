package com.pire.api.dto.review;

import javax.validation.constraints.NotBlank;

import com.pire.api.dto.account.StudentGroupDto;

import lombok.Data;

@Data
public class ReviewView {

	@NotBlank
	StudentGroupDto student;

	@NotBlank
	String review;
}
