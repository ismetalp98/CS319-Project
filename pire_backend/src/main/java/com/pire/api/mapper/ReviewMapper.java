package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.Review;
import com.pire.api.dto.review.CreateReviewDto;
import com.pire.api.dto.review.ReviewStringDto;
import com.pire.api.dto.review.ReviewView;

/**
 * this class maps the Review object and Review  object like objects such as create poll Review  dto etc.
 * @author atesel
 *
 */
@Mapper
public abstract class ReviewMapper {

	/**
	 * Map Review view and Review
	 * @param dto
	 * @return ReviewView
	 */
	public abstract ReviewView getReviewViewFromReview(Review dto);
	
	/**
	 * Map Review and create review dto
	 * @param dto
	 * @return Review
	 */
	public abstract Review getReviewFromCreateViewDto(CreateReviewDto dto);
	
	/**
	 * map Review string dto  and Review
	 * @param dto
	 * @return ReviewStringDto
	 */
	public abstract ReviewStringDto getReviewStringDtoFromReview(Review dto);
}
