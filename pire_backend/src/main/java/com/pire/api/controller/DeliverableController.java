package com.pire.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pire.api.dto.review.CreateDeliverableDto;
import com.pire.api.dto.review.CreateReviewDto;
import com.pire.api.dto.review.DeliverableView;
import com.pire.api.dto.review.ReviewView;
import com.pire.api.servise.DeliverableService;

@RestController
@RequestMapping(path = "api/deliverable")
public class DeliverableController {
	@Autowired
	DeliverableService service;
	
	@PostMapping("/create")
	public ResponseEntity<DeliverableView> createDeliverable(@RequestBody @Valid CreateDeliverableDto dto)
	{
		return ResponseEntity.ok(service.createDeliverable(dto));
	}
	
	@PostMapping("/addReview")
	public ResponseEntity<ReviewView> createDeliverable(@RequestBody @Valid CreateReviewDto dto)
	{
		return ResponseEntity.ok(service.addReview(dto));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<DeliverableView> findDeliverableById(
			@PathVariable(name = "id", required = true) Integer id)
	{
		return ResponseEntity.ok(service.findDeliverableById(id));
	}
}
