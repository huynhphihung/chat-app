/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
// import Reducer from './components/Reducer/Reducer';
// import Game from './components/tictactoe/Game';

const socket = io.connect('http://localhost:3001');

function App() {
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")

    const joinRoom = () => {

    }

    return (
        <div className='App'>
            <h3>Join a Chat app</h3>
            <input placeholder='John' onChange={(event) => setUsername(event.target.val)} />
            <input placeholder='Room ID'></input>
            <button>Join a Room</button>
        </div>
    );
}

export default App;
{/* <Game></Game> */}
{/* <Reducer></Reducer> */}