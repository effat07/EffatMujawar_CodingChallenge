import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PlayerService from "../services/PlayerService";
export default function UpdatePlayer() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res =await PlayerService.getPlayerById(id);
        setPlayer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlayer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PlayerService.updatePlayer(id, player);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Update Player</h2>
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

        <button className="btn btn-primary">Update Player</button>
      </form>
    </div>
  );
}
