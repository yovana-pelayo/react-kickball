import './App.css';
import Home from './Views/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Teams from './Views/Teams/TeamsList';
import TeamDetails from './Views/Teams/TeamDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/teams">
          <Teams />
        </Route>
        <Route exact path="/teams/:id">
          <TeamDetails />
        </Route>
        <Home />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Routes is like the index which tells nav links where to go
