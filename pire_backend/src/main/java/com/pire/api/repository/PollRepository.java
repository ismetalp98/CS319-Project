package com.pire.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Poll;

public interface PollRepository extends CrudRepository<Poll, Integer>{

}
