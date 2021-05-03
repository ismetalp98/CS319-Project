package com.pire.api.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Deliverable;

/**
 * This class handle databse operations of deliverable
 * @author atesel
 *
 */
public interface DeliverableRepository extends CrudRepository<Deliverable, Integer>{
	
	/**
	 * find delverable by name
	 * @param name
	 * @return 	Optional<Deliverable>
	 */
	Optional<Deliverable> findByName(String name);
}
