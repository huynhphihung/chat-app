import React from 'react';
import { calculateWinner } from '../../helper';
import Cell from './Cell';

const Board = (props) => {
    const show = () => {
        const cells = [null, null, null, null, 'X', 'X', null, null, null];
        console.log(calculateWinner(cells));
    };
    return (
        <div className="game-board">
            {
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
