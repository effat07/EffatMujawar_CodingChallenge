package com.hexaware.Demo.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.Demo.Dto.PlayerDTO;
import com.hexaware.Demo.entity.Player;

public interface IPlayerService {
      public List<Player> getAllPlayers();
      public Optional<Player> getById(Long playerId);
      public Player addPlayer(PlayerDTO dto);
      public String deletePlayer(Long playerId);
      public Player updatePlayer(Long playerId, PlayerDTO dto);

}
