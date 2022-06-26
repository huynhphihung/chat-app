import React from 'react';
import { useState } from 'react';
import './Toggle.css';
// Stateless functional component: là component không có sử dụng state
// function Toggle() {
//     return <div className="toggle"></div>
// }

// // Stateful functional component: là component có sử dụng state
// function Toggle2() {
//     return <div className="toggle2"></div>
// }

function Toggle() {
    // 1. enabling state: useState( initialize value )
    // 2. initialze state: useState(false)
    // 3. reading state:
    // 4. update state

    // const array = useState(false)
    // console.log(array);

    const [on, setOn] = useState(false);

    const handleToggle = () => {
        console.log(on);
        setOn((on) => !on);
    };

    return (
        <div>
            <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
                <div className={`spinner ${on ? 'active' : ''}`}></div>
            </div>
            {/* <div className="toggle-control">
                <div className="toggle-on" onClick={() => setOn(true)}>On</div>
                <div className="toggle-off" onClick={() => setOn(false)}>Off</div>
            </div> */}
        </div>
    );
}

export default Toggle;
