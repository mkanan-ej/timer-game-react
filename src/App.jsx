import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx'

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime={1} />
        <TimeChallenge title="Not Easy" targetTime={5} />
        <TimeChallenge title="Tough" targetTime={15} />
        <TimeChallenge title="Impossible" targetTime={30} />
      </div>
    </>
  );
}

export default App;
