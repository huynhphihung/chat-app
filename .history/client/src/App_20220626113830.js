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
        if (username !== "" && room !== "") {
            socket.emit("join_room", room)
        }
    }

    return (
        <div className='App'>
            <h3>Join a Chat app</h3>
            <input placeholder='John' onChange={(event) => setUsername(event.target.value)} />
            <input placeholder='Room ID' onChange={(event) => setRoom(event.target.value)} />
            <button onClick={joinRoom}>Join a Room</button>
        </div>
    );
}

export default App;
{/* <Game></Game> */}
{/* <Reducer></Reducer> */}