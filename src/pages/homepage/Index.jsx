import './Index.css';
import matches from '../../data/matches';
import FixtureComponent from '../homepage/components/fixture_component/FixtureComponent';
import React, { useState, useEffect } from 'react';
import mainImage from '../../images/newKits.svg';
import ClipLoader from "react-spinners/ClipLoader";

export default function Index() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageLoaded, setImageLoaded] = useState(false);
  //Todo: fix image loading, HTML part still needs to be fixed for this code to have purpose.

  useEffect(() => {
    const img = new Image();
    img.src = mainImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [mainImage]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  const getFixtures = () => {
    let indexOfNextMatch = matches.season20232024.findIndex(x => x.result == null);
    let customMatchesList = [];

    if (windowWidth > 1600) {
      let pointer = indexOfNextMatch;
      while (matches.season20232024[pointer - 5] == null) pointer++;
      customMatchesList = matches.season20232024.slice(pointer-5,pointer+1);
    } else if (windowWidth > 1050) { 
      let pointer = indexOfNextMatch;
      while (matches.season20232024[pointer - 3] == null) pointer++;
      customMatchesList = matches.season20232024.slice(pointer-3,pointer+1);
    } else if (windowWidth > 820) { 
      let pointer = indexOfNextMatch;
      while (matches.season20232024[pointer - 2] == null) pointer++;
      customMatchesList = matches.season20232024.slice(pointer-2,pointer+1);
    } else if (windowWidth > 650) { 
      let pointer = indexOfNextMatch;
      while (matches.season20232024[pointer - 1] == null) pointer++;
      customMatchesList = matches.season20232024.slice(pointer-1,pointer+1);
    } else if (windowWidth < 650) {
      customMatchesList = [matches.season20232024[indexOfNextMatch]];
    };
    
    //Todo: check for date instead of result.
    const customListNextGameIndex = customMatchesList.findIndex(x => x.result == null);

  return (
    <>
      {
        customMatchesList.map(match => {
          if (match === customMatchesList[customListNextGameIndex]) {
            return (
              <FixtureComponent matchData={match} isNextMatch={true}/>
            );
          } else {
            return (
              <FixtureComponent matchData={match} isNextMatch={false}/>
            )
          }
        })
      }
    </>
  )};

  return (
    <div id='Index_body'>
      <div id='main_content'>
        { 
        mainImage 
        ? 
          imageLoaded 
          ?
            (
              <img id='main_content_img' src={mainImage} alt="transfer_LanderAndro"/>
            )
          :
            (
              <div id='imageLoader'>
                <ClipLoader
                color={'red'}
                loading={!imageLoaded}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
              </div>
            )
        :
          (
            <>
              <h1><span id='word_highlight'>Welkom</span> op de officiële Zlatanks website!</h1>
              <p>
                Toekomstige mededelingen, nieuws en transfers zullen
                hier te zien zijn.
              </p>
            </>
          )
        }
      </div>
      <div id='homepage_fixtures'>
         {
          getFixtures()
        }
      </div>
    </div>
  );
}