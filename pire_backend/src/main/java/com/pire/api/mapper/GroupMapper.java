package com.pire.api.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.pire.api.domain.Group;
import com.pire.api.dto.account.CreateGroupDto;
import com.pire.api.dto.account.GroupView;

@Mapper
public abstract class GroupMapper {

	public abstract Group getGroupFromCreateGropDto(CreateGroupDto dto);
	
	public abstract CreateGroupDto getCreateGroupDtoFromGroup(Group group);
	
	public abstract GroupView getGroupViewFromGroup(Group group);
	
}
