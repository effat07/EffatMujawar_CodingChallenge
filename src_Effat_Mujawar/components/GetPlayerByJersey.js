import { useState } from "react";
import PlayerService from "../services/PlayerService";

export default function GetPlayerByJersey() {
  const [jerseyNumber, setJerseyNumber] = useState("");
  const [players, setPlayers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await PlayerService.getByJerseyNumber(Number(jerseyNumber));
      setPlayers(res.data);
    } catch (error) {
      console.log(error);
      setPlayers([]);
      alert("No players found with this jersey number");
    }
  };

  return (
    <div>
      <h2>Search Player by Jersey Number</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{ maxWidth: "400px" }}
          type="number"
          value={jerseyNumber}
          placeholder="Enter Jersey Number"
          onChange={(e) => setJerseyNumber(e.target.value)}
          className="form-control mb-2"
          required
        />
        <button className="btn btn-success">Search</button>
      </form>

      {players.length > 0 && (
        <table className="table table table-bordered mt-3">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Jersey</th>
              <th>Role</th>
              <th>Matches</th>
              <th>Team</th>
              <th>State</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p) => (
              <tr key={p.playerId}>
                <td>{p.playerId}</td>
                <td>{p.playerName}</td>
                <td>{p.jerseyNumber}</td>
                <td>{p.role}</td>
                <td>{p.totalMatches}</td>
                <td>{p.teamName}</td>
                <td>{p.stateName}</td>
                <td>{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
