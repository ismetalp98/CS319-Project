package com.pire.api.dto.poll;

import javax.validation.constraints.NotBlank;

import com.pire.api.dto.account.StudentReviewViewDto;

import lombok.Data;

@Data
public class PollAnswerView {
	
	@NotBlank
	StudentReviewViewDto student;
	
	@NotBlank
	String answer;
}
