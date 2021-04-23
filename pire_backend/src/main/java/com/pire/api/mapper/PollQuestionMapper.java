package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.PollQuestion;
import com.pire.api.dto.poll.CreatePollQuestionDto;
import com.pire.api.dto.poll.PollQuestionView;

@Mapper
public abstract class PollQuestionMapper {

	public abstract PollQuestion getPollQuestionFromCreatePollQuestionDto(CreatePollQuestionDto dto);
	
	public abstract PollQuestionView getPollQuestionViewFromPollQuestion(PollQuestion question);
}
