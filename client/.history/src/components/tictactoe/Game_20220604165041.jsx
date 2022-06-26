import React from 'react';
import { useState } from 'react';
import { calculateWinner } from '../../helper';
import Board from './Board';
import './GameStyle.css';

const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);
    const [state, setState] = useState({
        board: Array(9).fill(null),
        xIsNext: true
    })
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        const boardCopy = [...state.board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = state.xIsNext ? 'X' : 'O';
        setState({
            ...state,
            board: boardCopy,
            xIsNext: !state.xIsNext
        })
        // setBoard(boardCopy);
        // setXIsNext((xIsNext) => !xIsNext);
    };
    const handleResetGame = () => {
        setState()
        // setBoard(Array(9).fill(null));
        // setXIsNext(true);
    };
    return (
        <div>
            <Board cells={state.board} onClick={handleClick}></Board>
            {winner && <div className="game-winner">Winner is {winner}</div>}
            <button className="reset-game" onClick={handleResetGame}>
                Reset Game
            </button>
        </div>
    );
};

export default Game;
