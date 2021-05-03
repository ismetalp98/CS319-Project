package com.pire.api.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;

/**
 * database object of poll answers
 * @author atesel
 *
 */
@Data
@Entity
@Table(schema = "poll", name = "poll_answer")
public class PollAnswer extends AbstractBaseObj{
	
	@ManyToOne(fetch = FetchType.LAZY)
	PollQuestion pollQuestion;

	@ManyToOne(fetch = FetchType.LAZY)
	Student student;
	
	@NotBlank
	String answer;
	
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
