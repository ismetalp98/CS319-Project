package com.pire.api.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Instructor;

/**
 * This class handle databse operations of instructor
 * @author atesel
 *
 */
public interface InstructorRepository extends CrudRepository<Instructor, Integer>{

	/**
	 * Find instuctor with email
	 * @param email
	 * @return Optional<Instructor>
	 */
	Optional<Instructor> findByEmail(String email);
}
