package com.pire.api.mapper;

import org.mapstruct.Mapper;

import com.pire.api.domain.PeerEvaluation;
import com.pire.api.dto.poll.CreatePeerEvaluationDto;
import com.pire.api.dto.poll.PeerEvaluationView;

@Mapper
public abstract class PeerEvaluationMapper {

	public abstract PeerEvaluation getPeerEvaluationFromCreatePeerEvaluationDto(CreatePeerEvaluationDto dto);
	
	public abstract PeerEvaluationView getPeerEvaluationViewFromPeerEvaluation(PeerEvaluation evaluation);
}
