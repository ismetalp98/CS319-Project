package com.pire.api.dto.review;

import lombok.Data;

@Data
public class CreateReviewDto {
	
	String studentEmail;

	Integer deliverableId;
	
	String review;

}
