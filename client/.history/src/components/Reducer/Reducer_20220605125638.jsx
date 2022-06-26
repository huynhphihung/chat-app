import React from 'react';
import { useReducer } from 'react';

// 1. Init State
const initState = {
    job: '',
    jobs: [],
};

// 2. Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

// 3. Reducer
const reducer = (state, action) => {};

// 4. Dispatch

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const [job, jobs] = state;

    return (
        <div>
            <h3>Todo</h3>
            <input type="text" placeholder="Enter todo..." value={job} onChange={} />
            <button>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
};

export default Reducer;
