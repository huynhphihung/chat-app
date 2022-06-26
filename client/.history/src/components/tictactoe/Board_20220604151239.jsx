import React from 'react';
import { calculateWinner } from '../../helper';
import Cell from './Cell';

const Board = (props) => {
   
    console.log(calculateWinner(cells));
    return (
        <div className="game-board">
            {Array(9)
                .fill()
                .map((item, index) => (
                    <Cell key={index}></Cell>
                ))}
            {/* <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell> */}
        </div>
    );
};

export default Board;
