import React from 'react';
import { useEffect, useState } from 'react';
import { getTeams } from '../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Teams</h1>
      {teams.map((team) => (
        <p key={team.id}>{team.id}</p>
      ))}
    </div>
  );
}
