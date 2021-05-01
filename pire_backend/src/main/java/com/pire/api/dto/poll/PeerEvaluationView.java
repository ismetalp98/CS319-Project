package com.pire.api.dto.poll;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.pire.api.dto.account.GroupListViewDto;
import com.pire.api.dto.account.StudentReviewViewDto;

import lombok.Data;

@Data
public class PeerEvaluationView {

	StudentReviewViewDto evaluatorStudent;

	StudentReviewViewDto evaluatedStudent;

	GroupListViewDto group;
	
	@NotBlank
	String evaluation;
	
	@NotNull
	Integer point;
}
