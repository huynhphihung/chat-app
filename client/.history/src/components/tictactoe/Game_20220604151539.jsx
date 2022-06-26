import React from 'react';
import { useState } from 'react';
import Board from './Board';
import './GameStyle.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const handle
    return (
        <div>
            <Board cells={board}></Board>
        </div>
    );
};

export default Game;
