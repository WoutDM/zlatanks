import './Team.css';
import groepsfoto from '../../images/zlatanks_groepsfoto.jpg'

export default function Team() {

  return (
    <div id='Team_body'>
      <div id='Team_groepsfoto_crop'>
        <img src={groepsfoto} alt="zlatanks_groepsfoto" id='Team_groepsfoto' />
      </div>
    </div>
  );
}