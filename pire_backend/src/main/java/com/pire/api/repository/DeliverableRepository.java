package com.pire.api.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Deliverable;

public interface DeliverableRepository extends CrudRepository<Deliverable, Integer>{
	
	Optional<Deliverable> findByName(String name);
}
