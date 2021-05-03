package com.pire.api.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;

/**
 * Database object of deliverable
 * @author atesel
 *
 */
@Data
@Entity
@Table(schema = "review", name = "deliverable")
public class Deliverable extends AbstractBaseObj{
	
	@NotBlank
	String name;
	
	@NotBlank
	String url;
	
	@ManyToOne(fetch = FetchType.LAZY)
	Group group;
	
	@OneToMany(
			mappedBy = "deliverable",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	)
	public List<Review> reviews = new ArrayList<>();
	
	/**
	 * add review to the deverable object
	 * @param review
	 */
	public void addReview(Review review)
	{
		reviews.add(review);
		review.setDeliverable(this);
	}
	
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
