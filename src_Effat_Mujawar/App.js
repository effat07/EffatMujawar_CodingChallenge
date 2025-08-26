import './App.css';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import UpdatePlayer from './components/UpdatePlayer';
import { Link } from 'react-router-dom';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import GetPlayerByJersey from './components/GetPlayerByJersey';


function App() {
  return (
    <BrowserRouter>
      <div>
        
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={"/players"} className="navbar-brand">Player Management</Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">Add Players</Link>
            </li>
            <li className="nav-item">
              <Link to={"/getByJerseyNumber"} className="nav-link">Get Players By Jersey Number</Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<PlayerList />} />
            <Route path="/players" element={<PlayerList />} />
            <Route path="/add" element={<AddPlayer />} />
            <Route path="/update/:id" element={<UpdatePlayer />} />
            <Route path="/getByJerseyNumber" element={<GetPlayerByJersey />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
