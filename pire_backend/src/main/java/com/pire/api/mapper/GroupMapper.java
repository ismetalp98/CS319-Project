package com.pire.api.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.pire.api.domain.Group;
import com.pire.api.dto.account.CreateGroupDto;
import com.pire.api.dto.account.GroupAndDeleverableViewDto;
import com.pire.api.dto.account.GroupListViewDto;
import com.pire.api.dto.account.GroupView;
/**
 * this class maps the group object and group object like objects such as create group dto etc.
 * @author atesel
 *
 */
@Mapper
public abstract class GroupMapper {

	/**
	 * Map group and create group dto
	 * @param dto
	 * @return Group
	 */
	public abstract Group getGroupFromCreateGropDto(CreateGroupDto dto);
	
	/**
	 * map create group dto and group
	 * @param group
	 * @return CreateGroupDto
	 */
	public abstract CreateGroupDto getCreateGroupDtoFromGroup(Group group);
	
	/**
	 * Map group view and group 
	 * @param group
	 * @return GroupView
	 */
	public abstract GroupView getGroupViewFromGroup(Group group);
	
	/**
	 * Map group and deliverable view with group 
	 * @param group
	 * @return GroupAndDeleverableViewDto
	 */
	public abstract GroupAndDeleverableViewDto getGroupAndDeleverableViewDtoFromGroup(Group group);
	
	/**
	 * Map list of group object and list of group view object
	 * @param list
	 * @return List<GroupListViewDto>
	 */
	public abstract List<GroupListViewDto> getGroupListViewDtoFromGroup(List<Group> list);
}
