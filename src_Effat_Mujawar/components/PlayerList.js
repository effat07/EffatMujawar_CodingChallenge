import { useEffect, useState } from "react";
import PlayerService from "../services/PlayerService";
import { Link } from "react-router-dom";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const res = await PlayerService.getAllPlayers();
      setPlayers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

return (
    <div className="container mt-4">
      <h2 className="mb-3">Player List</h2>
      <div className="table-responsive">
        <table className="table table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Jersey</th>
              <th scope="col">Role</th>
              <th scope="col">Matches</th>
              <th scope="col">Team</th>
              <th scope="col">State</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.length > 0 ? (
              players.map((p) => (
                <tr key={p.playerId}>
                  <td>{p.playerId}</td>
                  <td>{p.playerName}</td>
                  <td>{p.jerseyNumber}</td>
                  <td>{p.role}</td>
                  <td>{p.totalMatches}</td>
                  <td>{p.teamName}</td>
                  <td>{p.stateName}</td>
                  <td>{p.description}</td>
                  <td>
                    <Link
                      className="btn btn-warning btn-sm me-2"
                      to={`/update/${p.playerId}`}
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No players found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
