package com.pire.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pire.api.domain.Review;
import com.pire.api.dto.review.ReviewView;

public interface ReviewRepository extends CrudRepository<Review, Integer>{
	
	Optional<List<ReviewView>> findByStudentName(String studentName);
	
	Optional<List<ReviewView>> findByDeliverableId(Integer deliverableId);
}
