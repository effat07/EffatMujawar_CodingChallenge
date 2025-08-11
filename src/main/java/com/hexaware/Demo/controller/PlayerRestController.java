package com.hexaware.Demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.Demo.Dto.PlayerDTO;
import com.hexaware.Demo.entity.Player;
import com.hexaware.Demo.service.IPlayerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/players")
public class PlayerRestController {
   @Autowired
   IPlayerService service;
   
   @GetMapping("/getAll")
   public List<Player> getAll(){
	   return service.getAllPlayers();
   }
   
   @GetMapping("/getById/{playerId}")
   public Optional<Player> getById(@PathVariable Long playerId){
	   return service.getById(playerId);
   }
   
   @PostMapping("/insert")
   public Player addPlayer(@Valid @RequestBody PlayerDTO dto) {
	   return service.addPlayer(dto);
   }
   
   @DeleteMapping("/delete/{playerId}")
   public String deletePlayer(@PathVariable Long playerId ) {
	   return service.deletePlayer(playerId);
   }
   
   @PutMapping("/update/{playerId}")
   public Player updatePlayer(@PathVariable Long playerId, @Valid @RequestBody  PlayerDTO dto) {
	   return service.updatePlayer(playerId, dto);
   }
   
   @GetMapping("/getByJerseyNumber/{jerseyNumber}")
   public List<Player> getByJerseyNumber(@PathVariable int jerseyNumber){
	   return service.findByJerseyNumber(jerseyNumber);
   }
}
