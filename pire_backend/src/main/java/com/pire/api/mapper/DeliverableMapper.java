package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.Deliverable;
import com.pire.api.dto.review.CreateDeliverableDto;
import com.pire.api.dto.review.DeliverableView;
import com.pire.api.dto.review.DeliverableViewReviewDto;

/**
 * this class maps the Deliverable object and deliverable object like objects such as create deliverable dto etc.
 * @author atesel
 *
 */
@Mapper
public abstract class DeliverableMapper {

	/**
	 * Map deliverable view and create deliverable dto
	 * @param dto
	 * @return DeliverableView
	 */
	public abstract DeliverableView getDeliverableViewFromCreateDeliverableDto(CreateDeliverableDto dto);
	
	/**
	 * Map deliverable and create delverable dto
	 * @param dto
	 * @return Deliverable
	 */
	public abstract Deliverable getDeliverableFromCreateDeliverableDto(CreateDeliverableDto dto);
	
	/**
	 * Map DeliverableView and delvierable
	 * @param deliverable
	 * @return DeliverableView
	 */
	public abstract DeliverableView getDeliverableViewFromDeliverable(Deliverable deliverable);
	
	/**
	 * Mpa deliverable view and Deliverable
	 * @param deliverable
	 * @return DeliverableViewReviewDto
	 */
	public abstract DeliverableViewReviewDto getDeliverableViewReviewDtoFromDeliverable(Deliverable deliverable);
}
