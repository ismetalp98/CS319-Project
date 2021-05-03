package com.pire.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.PollAnswer;

/**
 * This class handle databse operations of poll answers
 * @author atesel
 *
 */
public interface PollAnswerRepository extends CrudRepository<PollAnswer, Integer>{

}
