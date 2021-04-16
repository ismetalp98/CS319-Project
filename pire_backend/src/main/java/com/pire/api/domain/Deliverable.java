package com.pire.api.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
@Entity
@Table(schema = "review", name = "deliverable")
public class Deliverable extends AbstractBaseObj{
	
	@NotBlank
	String name;
	
	@NotBlank
	String url;
	
	@ManyToOne(fetch = FetchType.LAZY)
	Group group;
}
