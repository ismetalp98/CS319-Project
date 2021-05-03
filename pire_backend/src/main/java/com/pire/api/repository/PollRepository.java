package com.pire.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Poll;

/**
 * This class handle databse operations of poll
 * @author atesel
 *
 */
public interface PollRepository extends CrudRepository<Poll, Integer>{

	/**
	 * find all polls and return list of polls
	 * @return List<Poll>
	 */
	List<Poll> findAll();
}
