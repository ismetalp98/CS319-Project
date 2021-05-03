package com.pire.api.servise;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pire.api.domain.Group;
import com.pire.api.domain.Student;
import com.pire.api.dto.account.AddStudentDto;
import com.pire.api.dto.account.CreateGroupDto;
import com.pire.api.dto.account.GroupAndDeleverableViewDto;
import com.pire.api.dto.account.GroupListViewDto;
import com.pire.api.dto.account.GroupView;
import com.pire.api.exception.AlreadyExsitException;
import com.pire.api.exception.NotFoundException;
import com.pire.api.mapper.GroupMapper;
import com.pire.api.repository.GroupRepository;
import com.pire.api.repository.StudentRepository;
/**
 * Handle all database operation of group and return the return to the controller
 * @author atesel
 *
 */
@Service
public class GroupService {

	@Autowired
	GroupRepository repository;

	@Autowired
	GroupMapper mapper;
	
	@Autowired
	StudentRepository studentRepository;

	/**
	 * Create new group and save it to database
	 * @param dto
	 * @return
	 */
	public GroupView createGroup(CreateGroupDto dto) {
		repository.findGroupByName(dto.getName()).ifPresent( d ->{
			throw new AlreadyExsitException("Group name already exsist", "Group", "name");
		});
		
		Group group = mapper.getGroupFromCreateGropDto(dto);
		
		repository.save(group);
		
		GroupView groupView = mapper.getGroupViewFromGroup(group);
		
		return groupView;
	}
	
	/**
	 * add student to exsisting group and save it to datbase table
	 * @param dto
	 * @return
	 */
	public GroupView addStudent(AddStudentDto dto)
	{
		Group group = repository.findGroupByName(dto.getGroupname()).orElseThrow(() -> new NotFoundException("Grup not found"));
		
		Student student = studentRepository.findByEmail(dto.getStudentEmail()).orElseThrow(() -> new NotFoundException("Student not found"));
		
		group.addStudent(student);
		
		GroupView groupView = mapper.getGroupViewFromGroup(repository.save(group));
		
		return groupView;
	}
	
	/**
	 * Return the deleverables and group informaiton
	 * @param groupname
	 * @return GroupAndDeleverableViewDto
	 */
	public GroupAndDeleverableViewDto getGropuAndDeliverable(String groupname)
	{
		Group group = repository.findGroupByName(groupname).orElseThrow(() -> new NotFoundException("Grup not found"));
		
		return mapper.getGroupAndDeleverableViewDtoFromGroup(group);
	}
	
	/**
	 * Return all groups with only name
	 * @return List<GroupListViewDto>
	 */
	public List<GroupListViewDto> getAll(){
		List<Group> groups = repository.findAll();
		
		List<GroupListViewDto> viewDto = mapper.getGroupListViewDtoFromGroup(groups);
		
		return viewDto;
	}
}
