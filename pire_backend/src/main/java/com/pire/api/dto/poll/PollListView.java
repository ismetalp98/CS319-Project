package com.pire.api.dto.poll;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class PollListView {
	
	@NotNull
	Integer id;
	
	@NotBlank
	String name;
}
