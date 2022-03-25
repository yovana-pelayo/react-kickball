import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerById } from '../../services/players';

export default function PlayerDetails() {
  const params = useParams();
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(params.id);
      setPlayer(data);
      setLoading();
    };
    fetchData();
  }, [params.id]);

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <h1>{player.name}</h1>
      <ul>
        <li>
          {player.position} for the
          {player.teams.name}. Located in {player.teams.city}, {player.teams.state}
        </li>
      </ul>
    </div>
  );
}
