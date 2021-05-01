package com.pire.api.servise;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pire.api.domain.Group;
import com.pire.api.domain.PeerEvaluation;
import com.pire.api.domain.Student;
import com.pire.api.dto.poll.CreatePeerEvaluationDto;
import com.pire.api.dto.poll.PeerEvaluationView;
import com.pire.api.exception.NotFoundException;
import com.pire.api.mapper.PeerEvaluationMapper;
import com.pire.api.repository.GroupRepository;
import com.pire.api.repository.PeerEvaluationRepository;
import com.pire.api.repository.StudentRepository;

@Service
public class PeerEvaluationService {

	@Autowired 
	PeerEvaluationMapper mapper;
	
	@Autowired
	PeerEvaluationRepository repository;
	
	@Autowired
	StudentRepository studentRepository;
	
	@Autowired
	GroupRepository groupRepository;
	
	public PeerEvaluationView createPeerEvaluation(CreatePeerEvaluationDto dto) {
		Student evaluatorStudent = studentRepository.findByEmail(dto.getEvaluatorStudentEmail()).orElseThrow(
				() -> new NotFoundException("Evaluator student not found")
		);
		
		Student evaluatedStudent = studentRepository.findByEmail(dto.getEvaluatedStudentEmail()).orElseThrow(
				() -> new NotFoundException("Evaluated student not found")
		);
		
		Group group = groupRepository.findGroupByName(dto.getGroupName()).orElseThrow(
				() -> new  NotFoundException("Group not found")
		);
		
		PeerEvaluation peerEvaluation = mapper.getPeerEvaluationFromCreatePeerEvaluationDto(dto);
		
		group.addPeerEvaluation(peerEvaluation);
		
		evaluatedStudent.addOtherEvaluation(peerEvaluation);
		
		evaluatorStudent.addOwnEvaluation(peerEvaluation);
		
		repository.save(peerEvaluation);
		
		return mapper.getPeerEvaluationViewFromPeerEvaluation(peerEvaluation);
	}
	
	public List<PeerEvaluationView> getGroupPeerEvaluation(String groupName){
		List<PeerEvaluation> evaluations = repository.findAllByGroupName(groupName);
		
		return mapper.getPeerEvalutaionViewListFromPeerEvaluationList(evaluations);
	}
}
