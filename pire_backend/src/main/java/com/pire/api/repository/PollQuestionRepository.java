package com.pire.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.PollQuestion;

/**
 * This class handle databse operations of poll questions
 * @author atesel
 *
 */
public interface PollQuestionRepository extends CrudRepository<PollQuestion, Integer>{

}