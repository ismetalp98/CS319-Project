package com.pire.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Student;

/**
 * This class handle databse operations of student
 * @author atesel
 *
 */
public interface StudentRepository extends CrudRepository<Student, Integer> {
	
	/**
	 * find student by id
	 * @param email
	 * @return Optional<Student>
	 */
	Optional<Student> findByEmail(String email);
	
	/**
	 * find student by student id
	 * @param id
	 * @return Optional<Student>
	 */ 
	Optional<Student> findByStudentid(Integer id);

	/**
	 * find alls students and 
	 * @return List<Student>
	 */
	List<Student> findAll();
}
