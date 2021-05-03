package com.pire.api.domain;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * data base object which is releted with  instructor
 * @author atesel
 *
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(schema = "account", name = "instructor")
public class Instructor extends AbstractBaseObj{

	@NotBlank
	@Email
	private String email;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String surname;
	
	@NotBlank
	private String password;
	
}
