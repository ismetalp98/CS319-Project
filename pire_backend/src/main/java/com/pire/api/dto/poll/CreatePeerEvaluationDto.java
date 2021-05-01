package com.pire.api.dto.poll;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class CreatePeerEvaluationDto {

	@NotBlank
	String evaluatorStudentEmail;

	@NotBlank
	String evaluatedStudentEmail;

	@NotBlank
	String groupName;

	@NotBlank
	String evaluation;
	
	@NotNull
	Integer point;
}
