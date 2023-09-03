import './MatchComponent.css';
import zlatanks_transparant_logo from '../../../images/zlatanks_logo_transparant.png';


export default function MatchComponent({match}) {

  const getGoalScorers = match.scorers ? match.scorers.map((scorer, index) => { 
    return <p key={index} className='scorer'>{scorer.name}: {scorer.amount}</p>
  }) : null
         
  
  return (
    <div id='MatchComponent_body'>
      <div id='match_details'>
          { 
            match.friendly !== undefined ? 
            (
              <>
                <p>{match.date} {match.houre} | {match.location}</p>
                <p>Friendly</p>
              </>
            ) 
            :
            (
              <>
                <p>{match.date} {match.houre} | Bellekouter</p>
                <p>Competitie</p>
              </> 
            )
          }
      </div>
      {
        match.home ?
        (
        <div id='match_result'>
          <img className='match_result_logo' src={zlatanks_transparant_logo} alt="Zlatanks_logo" />
          {
            match.result ? 
            (<p id='match_result_score'>{match.result}</p>) 
            :
            (<p id='match_result_score'>VS</p>)
          }
          <p id='match_result_oponent'>{match.opponent}</p>
        </div>
        )
        :
        (
        <div id='match_result'>
          <p id='match_result_oponent'>{match.opponent}</p>
          {
            match.result ? 
            (<p id='match_result_score'>{match.result}</p>) 
            :
            (<p id='match_result_score'>VS</p>)
          }
          <img className='match_result_logo' src={zlatanks_transparant_logo} alt="Zlatanks_logo" /><br/>
          
        </div>

        )
      }
      {
        match.scorers ? (
          <div id='scorer_container'>
            <p id='scorer_container_title'>Goal scorers</p>
            {getGoalScorers}
          </div> 
        ) : (
          null
        )
      }   
    </div>
  );
}