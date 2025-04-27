
import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;
