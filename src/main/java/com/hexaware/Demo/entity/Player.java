package com.hexaware.Demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
@Table(name="player_info")
public class Player {
 
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long playerId;
	
    private String playerName;

    private int jerseyNumber;

    private String role;

    private int totalMatches;

    private String teamName;

    private String stateName;

    private String description;
	
}
