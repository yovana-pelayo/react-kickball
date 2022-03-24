import './App.css';
import Home from './Views/Home';
import { BrowserRouter } from 'react-router-dom';
import Teams from './Views/TeamsList';
function App() {
  return (
    <BrowserRouter>
      <Teams />
      <Home />
    </BrowserRouter>
  );
}

export default App;

//Routes is like the index which tells nav links where to go
