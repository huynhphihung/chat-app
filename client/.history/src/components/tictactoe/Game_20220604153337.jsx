import React from 'react';
import { useState } from 'react';
import { calculateWinner } from '../../helper';
import Board from './Board';
import './GameStyle.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext((xIsNext) => !xIsNext);
    };
    const handleResetGame = () {
        setBoad
    }
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            <button className="reset-game" onClick={handleResetGame}>Reset Game</button>
        </div>
    );
};

export default Game;
