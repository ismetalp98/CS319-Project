package com.pire.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.PeerEvaluation;

/**
 * This class handle databse operations of peer evaluation 
 * @author atesel
 *
 */
public interface PeerEvaluationRepository extends CrudRepository<PeerEvaluation, Integer>{
	
	/**
	 * find all groups peer evaluations
	 * @param name
	 * @return  	List<PeerEvaluation> 
	 */
	List<PeerEvaluation> findAllByGroupName(String name);
}
