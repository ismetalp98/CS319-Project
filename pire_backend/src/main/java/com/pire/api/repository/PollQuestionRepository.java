package com.pire.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.PollQuestion;

public interface PollQuestionRepository extends CrudRepository<PollQuestion, Integer>{

}