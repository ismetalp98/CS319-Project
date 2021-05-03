package com.pire.api.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

/**
 * database object of review
 * @author atesel
 *
 */
@Data
@Entity
@Table(schema = "review", name = "review")
public class Review extends AbstractBaseObj{

	@ManyToOne(fetch = FetchType.LAZY)
	private Student student;

	@ManyToOne(fetch = FetchType.LAZY)
	private Deliverable deliverable;
	
	@NotNull
	private String review;
	
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
