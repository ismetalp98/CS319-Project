package com.pire.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pire.api.dto.account.AddStudentDto;
import com.pire.api.dto.account.CreateGroupDto;
import com.pire.api.dto.account.GroupAndDeleverableViewDto;
import com.pire.api.dto.account.GroupListViewDto;
import com.pire.api.dto.account.GroupView;
import com.pire.api.servise.GroupService;

@RestController
@RequestMapping(path = "api/group")
public class GroupController {
	
	@Autowired
	GroupService service;
	
	@PostMapping("/create")
	public ResponseEntity<GroupView> createGroup(@RequestBody @Valid CreateGroupDto dto){
		return ResponseEntity.ok(service.createGroup(dto));
	}
	
	@PostMapping("/addStudent")
	public ResponseEntity<GroupView> addStudent(@RequestBody @Valid AddStudentDto dto){
		return ResponseEntity.ok(service.addStudent(dto));
	}
	
	@GetMapping("/getdeliverable/{groupname}")
	public ResponseEntity<GroupAndDeleverableViewDto> getGroupAndDeliverable(
			@PathVariable(name = "groupname", required = true) String groupname)
	{
		return ResponseEntity.ok(service.getGropuAndDeliverable(groupname));
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<GroupListViewDto> > getAll()
	{
		return ResponseEntity.ok(service.getAll());
	}
	
}
