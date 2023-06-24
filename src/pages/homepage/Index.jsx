import './Index.css';
import matches from '../../data/matches';
import FixtureComponent from '../shared_components/fixture_component/FixtureComponent';

export default function Index() {

  return (
    <div id='Index_body'>
      <div id='main_content'>
        <h1><span id='word_highlight'>Welkom</span> op de officiele Zlatanks website!</h1>
        <p>
          Toekomstige mededelingen, nieuws en transfers zullen
          hier te zien zijn.
        </p>
      </div>
      <div id='homepage_fixtures'>
        {
          matches.season20232024.map(match => {
            return <FixtureComponent matchData={match}/>
          })
        }
      </div>
    </div>
  );
}