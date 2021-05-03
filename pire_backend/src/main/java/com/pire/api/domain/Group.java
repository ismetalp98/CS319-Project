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
 * database object of group
 * @author atesel
 *
 */
@Data
@EqualsAndHashCode(callSuper=false)
@Entity
@Table(schema = "account", name = "group")
public class Group extends AbstractBaseObj{
	
	@NotBlank
	private String name;
	
	@OneToMany(
		mappedBy = "group"
	)
	private List<Student> students = new ArrayList<>();
	
	
	@OneToMany(
			mappedBy = "group",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	)
	private List<Deliverable> deliverables = new ArrayList<>();
	
	@OneToMany(
			mappedBy = "group",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	)
	private List<PeerEvaluation> peerEvaluations = new ArrayList<>();
	
	/**
	 * Add peerevalution to group
	 * @param evaluation
	 */
	public void addPeerEvaluation(PeerEvaluation evaluation) {
		peerEvaluations.add(evaluation);
		evaluation.setGroup(this);
	}
	
	/**
	 * add student to group
	 * @param student
	 */
	public void addStudent(Student student) {
		students.add(student);
		student.setGroup(this);
	}
	
	/**
	 * add deliver able to group
	 * @param deliverable
	 */
	public void addDeliverable(Deliverable deliverable)
	{
		deliverables.add(deliverable);
		deliverable.setGroup(this);
	}
	
	/**
	 * remove student to a group
	 * @param student
	 */
	public void removeStudent(Student student) {
		students.remove(student);
		student.setGroup(null);
	}
}
