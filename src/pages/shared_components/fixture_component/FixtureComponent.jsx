import './FixtureComponent.css';
import zlatanks_transparant_logo from '../../../images/zlatanks_logo_transparant.png';


export default function FixtureComponent({matchData, isNextMatch}) {

  return (
    <div id='FixtureComponent'>
      {
        matchData.home ? 
        (
          <div id='fixture_teams'><img src={zlatanks_transparant_logo} alt="zlatanks_logo" />  -  {matchData.opponent}</div>
        )
        :
        (
          <div id='fixture_teams'>{matchData.opponent}  -  <img src={zlatanks_transparant_logo} alt="zlatanks_logo" /></div>
        )
      }
      {
        isNextMatch ? 
        (
          <div id='nextMatchFixtureDateRed'>{matchData.date}</div>
        ) 
        : 
        (
          <div id='nextMatchFixtureDate'>{matchData.date}</div>
        )
      }
      {
        !matchData.result ? 
        (
          <div id='fixtureHoure'>{matchData.houre}</div>
        ) : null
      }
      <div id='fixtureMatchResult'>{matchData.result}</div>
    </div>
  );
}