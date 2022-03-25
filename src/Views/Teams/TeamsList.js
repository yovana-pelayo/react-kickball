import React from 'react';
import { useEffect, useState } from 'react';
import { getTeams } from '../../services/teams';
import { Link } from 'react-router-dom';
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
      <ul>Teams</ul>
      {teams.map((team) => (
        <li key={team.id}>
          <Link to={`/teams/${team.id}`}>{team.name}</Link>
        </li>
      ))}
    </div>
  );
}
