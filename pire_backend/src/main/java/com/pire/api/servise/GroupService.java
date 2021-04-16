package com.pire.api.servise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pire.api.domain.Group;
import com.pire.api.domain.Student;
import com.pire.api.dto.account.AddStudentDto;
import com.pire.api.dto.account.CreateGroupDto;
import com.pire.api.dto.account.GroupView;
import com.pire.api.exception.AlreadyExsitException;
import com.pire.api.exception.NotFoundException;
import com.pire.api.mapper.GroupMapper;
import com.pire.api.repository.GroupRepository;
import com.pire.api.repository.StudentRepository;

@Service
public class GroupService {

	@Autowired
	GroupRepository repository;

	@Autowired
	GroupMapper mapper;
	
	@Autowired
	StudentRepository studentRepository;

	public GroupView createGroup(CreateGroupDto dto) {
		repository.findGroupByName(dto.getName()).ifPresent( d ->{
			throw new AlreadyExsitException("Group name already exsist", "Group", "name");
		});
		
		Group group = mapper.getGroupFromCreateGropDto(dto);
		
		repository.save(group);
		
		GroupView groupView = mapper.getGroupViewFromGroup(group);
		
		return groupView;
	}
	
	public GroupView addStudent(AddStudentDto dto)
	{
		Group group = repository.findGroupByName(dto.getGroupname()).orElseThrow(() -> new NotFoundException("Grup not found"));
		
		Student student = studentRepository.findByEmail(dto.getStudentEmail()).orElseThrow(() -> new NotFoundException("Student not found"));
		
		group.addStudent(student);
		
		GroupView groupView = mapper.getGroupViewFromGroup(repository.save(group));
		
		return groupView;
	}
}
