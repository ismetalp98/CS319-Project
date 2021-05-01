package com.pire.api.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.pire.api.domain.PeerEvaluation;
import com.pire.api.dto.poll.CreatePeerEvaluationDto;
import com.pire.api.dto.poll.PeerEvaluationView;

@Mapper
public abstract class PeerEvaluationMapper {

	public abstract PeerEvaluation getPeerEvaluationFromCreatePeerEvaluationDto(CreatePeerEvaluationDto dto);
	
	public abstract PeerEvaluationView getPeerEvaluationViewFromPeerEvaluation(PeerEvaluation evaluation);
	
	public abstract List<PeerEvaluationView> getPeerEvalutaionViewListFromPeerEvaluationList(List<PeerEvaluation> evaluations);
}
