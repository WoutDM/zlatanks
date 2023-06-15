import './pages/navbar/Navbar.css';
import './App.css';
import Navbar from './pages/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import CustomPageBody from './pages/custom_page_body/CustomPageBody';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <CustomPageBody/>
    </BrowserRouter>
  );
}

export default App;
