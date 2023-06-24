import './FixtureComponent.css'

export default function FixtureComponent({matchData}) {

  return (
    <div id='FixtureComponent'>
      <div>{matchData.date}</div>
      <div>Zlatanks - {matchData.opponent}</div>
      <div>{matchData.result}</div>
    </div>
  );
}