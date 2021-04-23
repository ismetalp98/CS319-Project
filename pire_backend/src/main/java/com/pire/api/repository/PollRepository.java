package com.pire.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Poll;

public interface PollRepository extends CrudRepository<Poll, Integer>{

	List<Poll> findAll();
}
