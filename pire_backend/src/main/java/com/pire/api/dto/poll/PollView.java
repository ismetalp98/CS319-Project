package com.pire.api.dto.poll;

import java.util.List;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class PollView {
	@NotBlank
	String name;
	
	List<PollQuestionView> questions;
	
	
}
