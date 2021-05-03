package com.pire.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Not found exception when the object with seach key is not found in database this exeption is returned
 * @author atesel
 *
 */
@Data
@EqualsAndHashCode(callSuper=false)
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException {
	private static final long serialVersionUID = -5080960989422458215L;
	
	public  NotFoundException(String message) {
		super(message);
	}
}
