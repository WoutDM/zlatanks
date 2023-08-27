import './Team.css';
import groepsfoto from '../../images/zlatanks_groepsfoto.jpg'

export default function Team() {

  return (
    <div id='Team_body'>
      <div id='Team_groepsfoto_crop'>
        <img src={groepsfoto} alt="zlatanks_groepsfoto" id='Team_groepsfoto' />
      </div>
      <div id='player_overview_container'>
        <div className='player_type' id='coach'>
          <h2>Coach</h2>
          <p>Rob De Putter</p>
        </div>
        <div className='player_type' id='keeper'>
          <h2>Keeper</h2>
          <p>Wout De Maeseneer</p>
        </div>
        <div className='player_type' id='defenders'>
          <h2>Verdedigers</h2>
          <p>Brikke Van de Velde</p>
          <p>Jan Perdaens</p>
          <p>Renaat De Cooman</p>
          <p>Lander De Backer</p>
        </div>
        <div className='player_type' id='attackers'>
          <h2>Aanvallers</h2>
          <p>Wout Wartel</p>
          <p>Mathias Luypaert</p>
          <p>Senne De Backer</p>
          <p>Mauritz Lowie</p>
          <p>Thibault Lowie</p>
          <p>Lander Buyl</p>
          <p>Andro Martens</p>
        </div>
      </div>
    </div>
  );
}