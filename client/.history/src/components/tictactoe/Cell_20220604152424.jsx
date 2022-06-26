import React from 'react';

const Cell = ({ value, onClick }) => {
    // const {value, onClick} = props
    // console.log(value, onClick);
    return (
        <div className="game-cell" onClick={onClick}>
            {props.value}
        </div>
    );
};

export default Cell;
