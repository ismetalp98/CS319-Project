package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.Deliverable;
import com.pire.api.dto.review.CreateDeliverableDto;
import com.pire.api.dto.review.DeliverableView;
import com.pire.api.dto.review.DeliverableViewReviewDto;

@Mapper
public abstract class DeliverableMapper {

	public abstract DeliverableView getDeliverableViewFromCreateDeliverableDto(CreateDeliverableDto dto);
	
	public abstract Deliverable getDeliverableFromCreateDeliverableDto(CreateDeliverableDto dto);
	
	public abstract DeliverableView getDeliverableViewFromDeliverable(Deliverable deliverable);
	
	public abstract DeliverableViewReviewDto getDeliverableViewReviewDtoFromDeliverable(Deliverable deliverable);
}
