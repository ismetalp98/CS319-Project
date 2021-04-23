package com.pire.api.dto.poll;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class CreatePollAnswerDto {

	@NotNull
	Integer pollQuestionId;

	@NotNull
	String studentEmail;
	
	@NotBlank
	String answer;
}
