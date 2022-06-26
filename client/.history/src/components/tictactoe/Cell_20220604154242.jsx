import React from 'react';

const Cell = ({ value, onClick, className }) => {
    // const {value, onClick} = props
    // console.log(value, onClick);
    return (
        <div className={item !== null &&item === "X" ? 'is-x' : } onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;
