import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTeamsById } from '../../services/teams';

export default function TeamDetails() {
  const params = useParams();
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamsById(params.id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) return <div>Loading</div>;
  return (
    <div>
      <h1>Team Information!</h1>

      <h2 key={team.id}>{team.position}</h2>
      <ul>
        {team.players.map((player) => (
          <li key={player.id}>
            Position: {player.position}, Player: {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// use params is a variable that holds all of our properties from supabase
// state is teams, set teams. state holds component info. it is an object?
// we are getting info by our params id ??? ASk Ta more or think more about this

//dependencies-- look up
