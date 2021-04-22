package com.pire.api.dto.account;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.pire.api.dto.review.DeliverableView;

import lombok.Data;

@Data
public class GroupAndDeleverableViewDto {

	@NotBlank
	private String name;

	private List<StudentGroupDto> students;

	private List<DeliverableView> deliverables;
}
