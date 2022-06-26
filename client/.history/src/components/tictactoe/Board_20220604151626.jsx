import React from 'react';
import { calculateWinner } from '../../helper';
import Cell from './Cell';

const Board = (props) => {
    console.log(props);
    // const show = () => {
    //     const cells = [null, null, null, null, 'X', 'X', null, null, null];
    //     console.log(calculateWinner(cells));
    // };
    return (
        <div className="game-board">
            {props.cells.map((item, index) => (
                <Cell value={item} key={index} onClick={() => p}></Cell>
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
