import './Matches.css';
import matches from '../../data/matches';
import MatchComponent from './components/MatchComponent';

export default function Matches() {

  var noResultsAvailable = false;
  var count = 0;

  return (
    <div id='Matches_body'>
      {
        matches.season20232024.map((match) => {
          if (match.date === '6-1-2024') noResultsAvailable = true;
          if (!noResultsAvailable) {
            return (<MatchComponent match={match} />)
          } 
          if (noResultsAvailable && count === 0) {
            count++;
            return (
                    <h3 className='text-center'>
                      Didn't bother to update the other games, either lost or won against some shitty team.<br/>
                      Check our Instagram for more results.
                    </h3>
                  )
          }
        })
      }
    </div>
  );
}