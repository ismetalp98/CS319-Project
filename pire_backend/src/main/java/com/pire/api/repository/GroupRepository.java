package com.pire.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Group;

/**
 * This class handle databse operations of Group
 * @author atesel
 *
 */
public interface GroupRepository extends CrudRepository<Group, Integer>{
	
	/**
	 * find group with name
	 * @param name
	 * @return Optional<Group> 
	 */
	Optional<Group> findGroupByName(String name);
	
	/**
	 * find all groups and return all
	 * @return List<Group> 
	 */
	List<Group> findAll();
}
