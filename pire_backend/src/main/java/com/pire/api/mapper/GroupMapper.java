package com.pire.api.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.pire.api.domain.Group;
import com.pire.api.dto.account.CreateGroupDto;
import com.pire.api.dto.account.GroupAndDeleverableViewDto;
import com.pire.api.dto.account.GroupListViewDto;
import com.pire.api.dto.account.GroupView;

@Mapper
public abstract class GroupMapper {

	public abstract Group getGroupFromCreateGropDto(CreateGroupDto dto);
	
	public abstract CreateGroupDto getCreateGroupDtoFromGroup(Group group);
	
	public abstract GroupView getGroupViewFromGroup(Group group);
	
	public abstract GroupAndDeleverableViewDto getGroupAndDeleverableViewDtoFromGroup(Group group);
	
	public abstract List<GroupListViewDto> getGroupListViewDtoFromGroup(List<Group> list);
}
