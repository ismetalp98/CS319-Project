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
 * database object of poll questions
 * @author atesel
 *
 */
@Data
@Entity
@Table(schema = "poll", name = "poll_question")
public class PollQuestion extends AbstractBaseObj{

	@ManyToOne(fetch = FetchType.LAZY)
	private Poll poll;

	@NotBlank
	private String question;
	
	@OneToMany(
			mappedBy = "pollQuestion",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	)
	private List<PollAnswer> answers =  new ArrayList<>();
	
	/**
	 * add poll answer to answers list
	 * @param answer
	 */
	public void addAnswer(PollAnswer answer) {
		answers.add(answer);
		answer.setPollQuestion(this);
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
