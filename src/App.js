import './App.css';
import Home from './Views/Home';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import './Components/Header.css';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;

//Routes is like the index which tells nav links where to go
