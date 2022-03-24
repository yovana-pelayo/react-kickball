import './App.css';
import Home from './Views/Home';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import './Header.css';
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
