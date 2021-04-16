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

@Data
@EqualsAndHashCode(callSuper=false)
@Entity
@Table(schema = "account", name = "group")
public class Group extends AbstractBaseObj{
	
	@NotBlank
	private String name;
	
	@OneToMany(
		mappedBy = "group",
        cascade = CascadeType.ALL,
        orphanRemoval = true
	)
	private List<Student> students = new ArrayList<>();
	
	
	@OneToMany(
			mappedBy = "group",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true
	)
	private List<Deliverable> deliverables = new ArrayList<>();
	
	public void addStudent(Student student) {
		students.add(student);
		student.setGroup(this);
	}
	
	public void addDeliverable(Deliverable deliverable)
	{
		deliverables.add(deliverable);
		deliverable.setGroup(this);
	}
}
