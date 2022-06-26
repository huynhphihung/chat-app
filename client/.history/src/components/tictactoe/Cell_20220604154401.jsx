import React from 'react';

const Cell = ({ value, onClick, className }) => {
    // const {value, onClick} = props
    // console.log(value, onClick);
    return (
        <div
            className={`game-cell ${className}`}
            onClick={onClick}
            className={item !== null && item === 'X' ? 'is-x' : 'is-o'}
        >
            {value}
        </div>
    );
};

export default Cell;
