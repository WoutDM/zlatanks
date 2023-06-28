import './Matches.css';
import matches from '../../data/matches';
import MatchComponent from './components/MatchComponent';

export default function Matches() {

  return (
    <div id='Matches_body'>
      {
        matches.season20232024.map((match) => {
          return (<MatchComponent match={match} />)
        })
      }
    </div>
  );
}