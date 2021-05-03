package com.pire.api.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;

/**
 * Database object of peer evaluation
 * @author atesel
 *
 */
@Data
@Entity
@Table(schema = "poll", name = "peerevaluation")
public class PeerEvaluation extends AbstractBaseObj{
	
	@ManyToOne(fetch = FetchType.LAZY)
	Student evaluatorStudent;
	
	@ManyToOne(fetch = FetchType.LAZY)
	Student evaluatedStudent;
	
	@ManyToOne(fetch = FetchType.LAZY)
	Group group;
	
	@NotBlank
	String evaluation;
	
	@NotNull
	Integer point;
	
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AbstractBaseObj )) return false;
        return id != null && id.equals(((AbstractBaseObj) o).getId());
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
