import http from "../http-common"; 


class PlayerService {
  getAllPlayers() {
    return http.get(`/getAll`);
  }

  getPlayerById(id) {
    return http.get(`/getById/${id}`);
  }

  addPlayer(player) {
    return http.post(`/insert`, player);
  }

  updatePlayer(id, player) {
    return http.put(`/update/${id}`, player);
  }

  getByJerseyNumber(jerseyNumber){
    return http.get(`/getByJerseyNumber/${jerseyNumber}`);
  }
}

export default new PlayerService();
