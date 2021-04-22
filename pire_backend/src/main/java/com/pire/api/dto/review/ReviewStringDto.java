package com.pire.api.dto.review;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class ReviewStringDto {

	@NotBlank
	String review;
}
