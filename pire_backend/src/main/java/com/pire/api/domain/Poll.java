package com.pire.api.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * database object of pool
 * @author atesel
 *
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(schema = "poll", name = "poll")
public class Poll extends AbstractBaseObj{

	@NotBlank
	private String name;
	
	@OneToMany(
			mappedBy = "poll",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	)
	private List<PollQuestion> questions = new ArrayList<>();

	/**
	 * add question to poll
	 * @param question
	 */
	public void addQuestion(PollQuestion question) {
		questions.add(question);
		question.setPoll(this);
	}
}
