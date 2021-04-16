package com.pire.api.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Student;

public interface StudentRepository extends CrudRepository<Student, Integer> {
	
	Optional<Student> findByEmail(String email);
	
	Optional<Student> findByStudentid(Integer id);

}
