package com.pire.api.dto.poll;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class CreatePollDto {
	
	@NotBlank
	String name;
}
