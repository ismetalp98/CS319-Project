package com.pire.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Review;
import com.pire.api.dto.review.ReviewView;

/**
 * This class handle databse operations of reivew
 * @author atesel
 *
 */
public interface ReviewRepository extends CrudRepository<Review, Integer>{
	
	/**
	 * Find all student review with name
	 * @param studentName
	 * @return Optional<List<ReviewView>> 
	 */
	Optional<List<ReviewView>> findByStudentName(String studentName);
	
	/**
	 * This find all review by deleverable id
	 * @param deliverableId
	 * @return 	Optional<List<ReviewView>> 
	 */
	Optional<List<ReviewView>> findByDeliverableId(Integer deliverableId);
}
