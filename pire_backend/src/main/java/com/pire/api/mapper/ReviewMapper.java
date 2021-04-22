package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.Review;
import com.pire.api.dto.review.CreateReviewDto;
import com.pire.api.dto.review.ReviewStringDto;
import com.pire.api.dto.review.ReviewView;

@Mapper
public abstract class ReviewMapper {

	public abstract ReviewView getReviewViewFromReview(Review dto);
	
	public abstract Review getReviewFromCreateViewDto(CreateReviewDto dto);
	
	public abstract ReviewStringDto getReviewStringDtoFromReview(Review dto);
}
