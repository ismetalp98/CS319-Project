package com.pire.api.domain;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(schema = "general", name = "peerreviewperiod")
public class PeerEvaluationPeriod extends AbstractBaseObj {
	
	@NotNull
	private Boolean active;
}
