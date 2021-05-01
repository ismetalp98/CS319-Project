package com.pire.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.PeerEvaluation;

public interface PeerEvaluationRepository extends CrudRepository<PeerEvaluation, Integer>{

	List<PeerEvaluation> findAllByGroupName(String name);
}
