package com.pire.api.servise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pire.api.domain.Deliverable;
import com.pire.api.domain.Group;
import com.pire.api.domain.Review;
import com.pire.api.domain.Student;
import com.pire.api.dto.review.CreateDeliverableDto;
import com.pire.api.dto.review.CreateReviewDto;
import com.pire.api.dto.review.DeliverableView;
import com.pire.api.dto.review.ReviewView;
import com.pire.api.exception.NotFoundException;
import com.pire.api.mapper.DeliverableMapper;
import com.pire.api.mapper.ReviewMapper;
import com.pire.api.repository.DeliverableRepository;
import com.pire.api.repository.GroupRepository;
import com.pire.api.repository.ReviewRepository;
import com.pire.api.repository.StudentRepository;


/**
 * Handle all database operation and return the return to the controller
 * @author atesel
 *
 */
@Service
public class DeliverableService {

	@Autowired
	DeliverableRepository repository;
	
	@Autowired
	DeliverableMapper mapper;
	
	@Autowired
	GroupRepository groupRepository;
	
	@Autowired
	ReviewMapper reviewMapper;
	
	@Autowired
	ReviewRepository reviewRepository;
	
	@Autowired
	StudentRepository studentRepository;

	/**
	 * Create new deliverable object in databse and saved to databse
	 * @param dto
	 * @return DeliverableView
	 */
	public DeliverableView createDeliverable(CreateDeliverableDto dto) {
		
		// check the group exsist or not
		Group group = groupRepository.findGroupByName(dto.getGroupname()).orElseThrow(
		 () -> new NotFoundException("Group not found")		
		);
		
		Deliverable deliverable = mapper.getDeliverableFromCreateDeliverableDto(dto);
		
		Deliverable deliverablesaved = repository.save(deliverable);
		
		group.addDeliverable(deliverablesaved);
		
		groupRepository.save(group);
		
		return mapper.getDeliverableViewFromDeliverable(deliverablesaved);
	}
	
	/**
	 * Create new review and save it to database
	 * @param dto
	 * @return ReviewView
	 */
	public ReviewView addReview(CreateReviewDto dto){
		Deliverable deliverable = repository.findById(dto.getDeliverableId()).orElseThrow(
				 () -> new NotFoundException("Deliverable not found")		
		);
		
		Student student =  studentRepository.findByEmail(dto.getStudentEmail()).orElseThrow(
				 () -> new NotFoundException("Deliverable not found")		
		);
		
		Review review = reviewMapper.getReviewFromCreateViewDto(dto);
		
		student.addReview(review);
		deliverable.addReview(review);
		
		Review reiewSaved = reviewRepository.save(review);
		ReviewView reviewView = reviewMapper.getReviewViewFromReview(reiewSaved);
		
		return reviewView;
	}
	
	/**
	 * find and retunr delviable with id
	 * @param id
	 * @return DeliverableView
	 */
	public DeliverableView findDeliverableById(Integer id)
	{
		return mapper.getDeliverableViewFromDeliverable(repository.findById(id).get());
	}
}
