import React from 'react';
import Cell from './Cell';

const Board = () => {
    const arr =;
    return (
        <div className="game-board">
            {arr.map((item, index) => {
                <Cell key={index}></Cell>;
            })}
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
