package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.PollAnswer;
import com.pire.api.dto.poll.CreatePollAnswerDto;
import com.pire.api.dto.poll.PollAnswerView;

/**
 * this class maps the poll answer  object and poll answer  object like objects such as create poll answer  dto etc.
 * @author atesel
 *
 */
@Mapper
public abstract class PollAnswerMapper {
	
	/**
	 * Map poll answer and create poll answer dot
	 * @param dto
	 * @return PollAnswer
	 */
	public abstract PollAnswer getPollAnswerFromCreatePollAnswerDto(CreatePollAnswerDto dto);
	
	/**
	 * Map poll answer view and poll answer 
	 * @param answer
	 * @return PollAnswerView
	 */
	public abstract PollAnswerView getPollAnswerViewFrom(PollAnswer answer);
}
