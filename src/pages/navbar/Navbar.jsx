import { Link } from 'react-router-dom';
import zlatanks_transparant_logo from '../../images/zlatanks_logo_transparant.png'

export default function Navbar() {

  return (
    <nav>
      <div id='navbar_top'>
        <div id='navbar_top_content'>
          <div id='logo_and_name'>
            <Link to='/'>
              <img src={zlatanks_transparant_logo} alt="zlatanks_logo" />
            </Link>
            <h1>Zlatanks</h1>
          </div>
          <button id='button_player_login'>
            Speler login
          </button>
        </div>
      </div>
      <div id='navbar_bottom'>
        <div id='navbar_bottom_content'>
          <Link to='/Kalender'>
            <p className='link_text'>Kalender</p>
          </Link>
          <Link to='/Team'>
            <p className='link_text'>Team</p>
          </Link>
        </div>
      </div>
      
    </nav>
  );
}