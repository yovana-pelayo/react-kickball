import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';

export default function PlayersList() {
  const [players, setPlayers] = useState([]);
  const fetchData = async () => {
    const data = await fetchPlayers();
  };
}
