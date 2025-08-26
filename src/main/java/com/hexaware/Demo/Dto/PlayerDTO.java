package com.hexaware.Demo.Dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PlayerDTO {
	
    private Long playerId;

	@NotBlank(message = "Player name is required")
    private String playerName;
	
	@NotNull(message = "Jersey number is required")
    @Min(value = 1, message = "Jersey number must be positive")
    private int jerseyNumber;
	
	@NotBlank(message = "Role is required")
    @Pattern(regexp = "Batsman|Bowler|Keeper|All Rounder", message = "Role must be Batsman, Bowler, Keeper, or All Rounder")
    private String role;

	@NotNull(message = "Total matches is required")
    @Min(value = 0, message = "Total matches cannot be negative")
    private int totalMatches;

	@NotBlank(message = "Team name is required")
    private String teamName;

	@NotBlank(message = "State name is required")
    private String stateName;
     
	@NotBlank(message = "Description is required")
	@Size(max = 200, message = "Description can be up to 200 characters")
    private String description;
}

