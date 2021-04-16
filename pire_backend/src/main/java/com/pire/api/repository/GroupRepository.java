package com.pire.api.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Group;


public interface GroupRepository extends CrudRepository<Group, Integer>{
	
	Optional<Group> findGroupByName(String name);
	
}
