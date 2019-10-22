import React from 'react';

import OverheadMap from '../images/map/overhead_map.png';

function Game() {
  return (
    <div className="text-center">
      <img src={OverheadMap} alt="Map" width="80%" height="80%" />
    </div>
  );
}

export default Game;
