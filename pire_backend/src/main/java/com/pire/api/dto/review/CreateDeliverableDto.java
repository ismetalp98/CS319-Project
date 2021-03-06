package com.pire.api.dto.review;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class CreateDeliverableDto {

	@NotBlank
	String name;
	
	@NotBlank
	String url;
	
	@NotBlank
	String groupname;
}
