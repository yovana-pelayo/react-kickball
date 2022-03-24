import client from '.client';

export default function getTeams() {
  const params = new URLSearchParams();
  params.set('select', '*');
  let url = `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/teams?${params.toString()}`;
  const resp = await fetch(url, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}
export async function fetchTeamsById(id) {
  const resp = await client.from('teams').select('*').match({ id }).single();
  return checkError(resp);
}
// creating a fetch function that is going to pull my props from supa
// focus on just inserting the list of teams onto page
