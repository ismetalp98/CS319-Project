package com.pire.api.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.pire.api.domain.Poll;
import com.pire.api.dto.poll.CreatePollDto;
import com.pire.api.dto.poll.PollListView;
import com.pire.api.dto.poll.PollView;
/**
 * this class maps the poll  object and poll object like objects such as create poll dto etc.
 * @author atesel
 *
 */
@Mapper
public abstract class PollMapper {
	
	/**
	 * Map poll and create poll dto
	 * @param dto
	 * @return Poll
	 */
	public abstract Poll getPollFromCreatePollDto(CreatePollDto dto);
	
	/**
	 * Map poll view and poll
	 * @param poll
	 * @return PollView
	 */
	public abstract PollView getPollViewFromPoll(Poll poll);
	
	/**
	 * map list of poll view and list of poll
	 * @param polls
	 * @return List<PollListView>
	 */
	public abstract List<PollView> getPollViewListFromPollList(List<Poll> polls);
	
	/**
	 * Map list of poll list view and list of poll
	 * @param polls
	 * @return List<PollListView>
	 */
	public abstract List<PollListView> getPollListViewFromPollList(List<Poll> polls);
}
