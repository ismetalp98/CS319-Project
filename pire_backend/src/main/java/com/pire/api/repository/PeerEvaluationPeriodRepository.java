package com.pire.api.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.PeerEvaluationPeriod;

/**
 * This class handle databse operations of peer evaluation period
 * @author atesel
 *
 */
public interface PeerEvaluationPeriodRepository extends CrudRepository<PeerEvaluationPeriod, Integer>{
	/**
	 * Find peer evalution period with id
	 * @return Optional<PeerEvaluationPeriod> 
	 */
	Optional<PeerEvaluationPeriod> findById(Integer id);
}
