package com.pire.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
@ResponseStatus(value = HttpStatus.CONFLICT)
public class AlreadyExsitException extends RuntimeException{

	private static final long serialVersionUID = -2925835633091289837L;
	private String entity;
	private String attribute;
	
	public AlreadyExsitException (String message, String entity, String attribute){
		super(message);
		this.attribute = attribute;
		this.entity = entity;
	}
}
