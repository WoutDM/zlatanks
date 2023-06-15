import Matches from '../matches/Matches';
import Index from '../homepage/Index';
import { Routes, Route } from 'react-router-dom';
import './CustomPageBody.css';

export default function CustomPageBody() {

  return (
    <div id='custom_body'>
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="/Kalender" element={<Matches/>}/>
        <Route exact path="/Team"/>
      </Routes>
    </div>
    
  );
}