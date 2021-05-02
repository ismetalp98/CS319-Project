package com.pire.api.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.PeerEvaluationPeriod;


public interface PeerEvaluationPeriodRepository extends CrudRepository<PeerEvaluationPeriod, Integer>{
	Optional<PeerEvaluationPeriod> findById(Integer id);
}
