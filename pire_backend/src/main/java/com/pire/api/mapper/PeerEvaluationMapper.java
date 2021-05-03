package com.pire.api.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.pire.api.domain.PeerEvaluation;
import com.pire.api.dto.poll.CreatePeerEvaluationDto;
import com.pire.api.dto.poll.PeerEvaluationView;

/**
 * this class maps the Peer Evaluation object and Peer Evaluation object like objects such as create Peer Evaluation dto etc.
 * @author atesel
 *
 */
@Mapper
public abstract class PeerEvaluationMapper {

	/**
	 * Map peer evaluation and create peer evalutaion dto
	 * @param dto
	 * @return PeerEvaluation
	 */
	public abstract PeerEvaluation getPeerEvaluationFromCreatePeerEvaluationDto(CreatePeerEvaluationDto dto);
	
	/**
	 * Map peer evalutaion view and peer evalutaion
	 * @param evaluation
	 * @return PeerEvaluationView
	 */
	public abstract PeerEvaluationView getPeerEvaluationViewFromPeerEvaluation(PeerEvaluation evaluation);
	
	/**
	 * Map list of peer evalutaion view and peer evalutaion 
	 * @param evaluations
	 * @return List<PeerEvaluationView>
	 */
	public abstract List<PeerEvaluationView> getPeerEvalutaionViewListFromPeerEvaluationList(List<PeerEvaluation> evaluations);
}
