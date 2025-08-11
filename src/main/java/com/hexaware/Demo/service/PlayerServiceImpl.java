package com.hexaware.Demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.Demo.Dto.PlayerDTO;
import com.hexaware.Demo.entity.Player;
import com.hexaware.Demo.exception.ResourceNotFoundException;
import com.hexaware.Demo.repository.PlayerRepository;

@Service
public class PlayerServiceImpl implements IPlayerService {

	@Autowired
	PlayerRepository repo;
	
	@Override
	public List<Player> getAllPlayers() {
		
		return repo.findAll();
	}

	@Override
	public Optional<Player> getById(Long playerId) {
		 if (!repo.existsById(playerId)) {
	            throw new ResourceNotFoundException("Player not found with id: " + playerId);
	        }
		return repo.findById(playerId);
	}

	@Override
	public Player addPlayer(PlayerDTO dto) {
		Player player = new Player();
		player.setPlayerId(dto.getPlayerId());
		player.setPlayerName(dto.getPlayerName());
		player.setJerseyNumber(dto.getJerseyNumber());
		player.setRole(dto.getRole());
		player.setTotalMatches(dto.getTotalMatches());
		player.setTeamName(dto.getTeamName());
		player.setStateName(dto.getStateName());
		player.setDescription(dto.getDescription());

		return repo.save(player);
	}

	@Override
	public String deletePlayer(Long playerId) {
		 if (!repo.existsById(playerId)) {
	            throw new ResourceNotFoundException("Player not found with id: " + playerId);
	        }

		repo.deleteById(playerId);
		return "Record deleted successfully";
	}

	@Override
	public Player updatePlayer(Long playerId, PlayerDTO dto) {
		 Player existing = repo.findById(playerId)
		.orElseThrow(() -> new ResourceNotFoundException("Player not found: " + playerId));

			    existing.setPlayerName(dto.getPlayerName());
			    existing.setJerseyNumber(dto.getJerseyNumber());
			    existing.setRole(dto.getRole());
			    existing.setTotalMatches(dto.getTotalMatches());
			    existing.setTeamName(dto.getTeamName());
			    existing.setStateName(dto.getStateName());
			    existing.setDescription(dto.getDescription());
			    return repo.save(existing);

	}
	
	@Override
	public List<Player> findByJerseyNumber(int jerseyNumber) {
		return repo.findByJerseyNumber(jerseyNumber);
	}


}
