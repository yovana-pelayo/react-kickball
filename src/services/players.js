import { client, checkError } from './client';

export async function fetchPlayers() {
  const params = new URLSearchParams();
  params.set('select', '*');
  let url = `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/players?${params.toString()}`;
  const resp = await fetch(url, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });

  const data = await resp.json();
  return data;
}
export async function fetchPlayerById(id) {
  const resp = await client.from('players').select('*').match({ id }).single();
  return checkError(resp);
}

//created params variable
//params holds all of the info from supabase
// we are setting url equal to the string that represents the object.
// What? url is saying we want to return the info back in a string form?
// set all that info to data so we can use that var in our component
