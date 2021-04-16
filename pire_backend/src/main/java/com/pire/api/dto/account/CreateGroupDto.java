package com.pire.api.dto.account;

import javax.validation.constraints.NotBlank;

import lombok.Data;
@Data
public class CreateGroupDto {
	@NotBlank
	private String name;
}
