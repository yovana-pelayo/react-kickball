import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../../services/players';

export default function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul>Players</ul>
      {players.map((player) => (
        <li key={player.id}>
          <Link to={`/players/${player.id}`}>{player.name}</Link>
        </li>
      ))}
    </div>
  );
}
//getting data from fetchPlayer
// in return we want a div
