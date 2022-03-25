import React from 'react';
import { useState, useEffect } from 'react';
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
  return <div>Player</div>;
}
