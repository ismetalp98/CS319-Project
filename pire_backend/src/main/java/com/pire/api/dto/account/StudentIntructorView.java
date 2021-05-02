package com.pire.api.dto.account;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.pire.api.dto.poll.PeerEvaluationStudentView;
import com.pire.api.dto.poll.PeerEvaluationView;
import com.pire.api.dto.review.ReviewStringDto;
import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class StudentIntructorView {
	@NotBlank
	@Email
	private String email;
	
	@NotNull
	private Integer studentid;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String surname;
	
	private GroupView group;
	
	private List<ReviewStringDto> reviews;
	
	private List<PeerEvaluationStudentView> otherEvaluation;
}
