import './App.css';
import Navbar from './pages/navbar/Navbar';
import Matches from './pages/matches/Matches';
import Index from './pages/homepage/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Index/>}/>
          <Route exact path="/Matches" element={<Matches/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
