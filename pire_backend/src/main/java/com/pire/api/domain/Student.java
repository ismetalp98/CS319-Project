package com.pire.api.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
@Entity
@Table(schema = "account", name = "student")
public class Student extends AbstractBaseObj{
	
	@NotBlank
	@Email
	private String email;
	
	@NotNull
	@Min(100)
	private Integer studentid;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String surname;
	
	@NotBlank
	private String password;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private Group group;
	
	@OneToMany(
			mappedBy = "student",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	)
	private List<Review> reviews = new ArrayList<>();
	
	@OneToMany(
			mappedBy = "student",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	)
	private List<PollAnswer> answers = new ArrayList<>();
	
	public void addAnswer(PollAnswer answer) {
		answers.add(answer);
		answer.setStudent(this);
	}
	
	public void addReview(Review review)
	{
		reviews.add(review);
		review.setStudent(this);
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