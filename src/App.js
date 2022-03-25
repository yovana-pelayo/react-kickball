import './App.css';
import Home from './Views/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TeamsList from './Views/Teams/TeamsList';
import TeamDetails from './Views/Teams/TeamDetails';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/teams">
            <TeamsList />
          </Route>
          <Route exact path="/teams/:id">
            <TeamDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Routes is like the index which tells nav links where to go
