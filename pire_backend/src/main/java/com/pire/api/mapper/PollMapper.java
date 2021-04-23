package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.Poll;
import com.pire.api.dto.poll.CreatePollDto;
import com.pire.api.dto.poll.PollView;

@Mapper
public abstract class PollMapper {
	
	public abstract Poll getPollFromCreatePollDto(CreatePollDto dto);
	
	public abstract PollView getPollViewFromPoll(Poll poll);
}
