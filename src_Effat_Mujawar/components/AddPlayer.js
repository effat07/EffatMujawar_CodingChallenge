import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerService from "../services/PlayerService";
export default function AddPlayer() {
  const navigate = useNavigate();
  const [player, setPlayer] = useState({
    playerName: "",
    jerseyNumber: "",
    role: "",
    totalMatches: "",
    teamName: "",
    stateName: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PlayerService.addPlayer(player);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="playerName"
          value={player.playerName}
          placeholder="Player Name"
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="jerseyNumber"
          value={player.jerseyNumber}
          placeholder="Jersey Number"
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="role"
          value={player.role}
          placeholder="Role"
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="totalMatches"
          value={player.totalMatches}
          placeholder="Total Matches"
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="teamName"
          value={player.teamName}
          placeholder="Team Name"
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="stateName"
          value={player.stateName}
          placeholder="State Name"
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="description"
          value={player.description}
          placeholder="Description"
          onChange={handleChange}
          className="form-control mb-2"
          required
        />

        <button className="btn btn-success">Add Player</button>
      </form>
    </div>
  );
  
}
