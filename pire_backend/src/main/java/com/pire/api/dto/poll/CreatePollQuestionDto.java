package com.pire.api.dto.poll;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class CreatePollQuestionDto {
	
	@NotNull
	private Integer pollId;

	@NotBlank
	private String question;
}
