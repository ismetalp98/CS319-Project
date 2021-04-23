package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.PollAnswer;
import com.pire.api.dto.poll.CreatePollAnswerDto;
import com.pire.api.dto.poll.PollAnswerView;

@Mapper
public abstract class PollAnswerMapper {
	
	public abstract PollAnswer getPollAnswerFromCreatePollAnswerDto(CreatePollAnswerDto dto);
	
	public abstract PollAnswerView getPollAnswerViewFrom(PollAnswer answer);
}
