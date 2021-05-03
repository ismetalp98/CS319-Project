package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.PollQuestion;
import com.pire.api.dto.poll.CreatePollQuestionDto;
import com.pire.api.dto.poll.PollQuestionView;
/**
 * this class maps the poll question  object and poll question  object like objects such as create poll question  dto etc.
 * @author atesel
 *
 */
@Mapper
public abstract class PollQuestionMapper {

	/**
	 * Map poll PollQuestion and create poll PollQuestion dto
	 * @param dto
	 * @return PollAnswer
	 */ 
	public abstract PollQuestion getPollQuestionFromCreatePollQuestionDto(CreatePollQuestionDto dto);
	
	/**
	 * Map PollQuestion view and PollQuestion
	 * @param question
	 * @return PollQuestionView
	 */
	public abstract PollQuestionView getPollQuestionViewFromPollQuestion(PollQuestion question);
}
