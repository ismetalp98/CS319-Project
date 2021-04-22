package com.pire.api.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Instructor;

public interface InstructorRepository extends CrudRepository<Instructor, Integer>{

	Optional<Instructor> findByEmail(String email);
}
