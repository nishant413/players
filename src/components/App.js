import React from 'react';
import PlayerList from './playerList'
import PlayerDetail from './playerDetail'

const App=()=> {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
      <PlayerList/>
        </div>
        <div>
          <PlayerDetail/>
        </div>
      </div>
    </div>
  );
}

export default App;
