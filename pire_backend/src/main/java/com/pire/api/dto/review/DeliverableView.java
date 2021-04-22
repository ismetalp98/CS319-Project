package com.pire.api.dto.review;

import java.util.List;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class DeliverableView {
	
	@NotBlank
	Integer Id;
	
	@NotBlank
	String name;
	
	@NotBlank
	String url;
	
	List<ReviewView> reviews; 
}
