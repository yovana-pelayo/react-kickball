import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTeamsById } from '../../services/teams';

export default function TeamDetails() {
  const params = useParams();
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    getTeamsById(params.id).then(({ data }) => setTeams(data));
  }, [params.id]);
  return <div className="team-info">Team Information!</div>;
}

// use params is a variable that holds all of our properties from supabase
// state is teams, set teams. state holds component info. it is an object?
// we are getting info by our params id ??? ASk Ta more or think more about this

//dependencies-- look up
