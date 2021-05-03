package com.pire.api.domain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Data;

/**
 * base of database objects
 * @author atesel
 *
 */
@Data
@MappedSuperclass
public abstract class AbstractBaseObj {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false)
	protected Integer id;

}
