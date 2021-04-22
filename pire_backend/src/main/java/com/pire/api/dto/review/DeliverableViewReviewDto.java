package com.pire.api.dto.review;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class DeliverableViewReviewDto {

	@NotBlank
	String name;
	
	@NotBlank
	String url;
}
