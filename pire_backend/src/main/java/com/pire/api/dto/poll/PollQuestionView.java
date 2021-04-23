package com.pire.api.dto.poll;

import java.util.List;

import lombok.Data;

@Data
public class PollQuestionView {
	
	String question;
	
	List<PollAnswerView> answers;
}
