import './MatchComponent.css';
import React, { useState } from "react";
import zlatanks_transparant_logo from '../../../images/zlatanks_logo_transparant.png';


export default function MatchComponent({match}) {

  const [showPrikker, setShowPrikker] = useState(false);

  const getGoalScorers = match.scorers ? match.scorers.map((scorer, index) => { 
    return <p key={index} className='scorer'>{scorer.name}: {scorer.amount}</p>
  }) : null

  let uitgeklapt = false;
  const handleShowPrikkers = () => {
    setShowPrikker(!showPrikker);
  }
  
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
        getGoalScorers ? (
          !showPrikker ? (
            <p id='showPrikker_toggle' onClick={handleShowPrikkers}>Show prikkers</p>
          ) : (
            <p id='showPrikker_toggle' onClick={handleShowPrikkers}>Hide prikkers</p>
          )
        ) : (
          null
        )   
      }
      {
        match.scorers ? (
          showPrikker ? (
            <div id='scorer_container'>
              {getGoalScorers}
            </div> 
          ) : (
            null
          )
        ) : (
          null
        )
      }   
    </div>
  );
}