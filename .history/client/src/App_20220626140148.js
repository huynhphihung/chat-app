/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './components/Chat/Chat';
// import Reducer from './components/Reducer/Reducer';
// import Game from './components/tictactoe/Game';

const socket = io.connect('http://localhost:3001');

function App() {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [showChat, setShowChat] = useState('');

    const joinRoom = () => {
        if (username !== '' && room !== '') {
            socket.emit('join_room', room);
        }
    };

    return (
        <div className="App">
            {!showChat ? (
            <div className='joinChatContainer'>
                <h3>Join a Chat app</h3>
                <input className='container-input' placeholder="John" onChange={(event) => setUsername(event.target.value)} />
                <input className='container-input' placeholder="Room ID" onChange={(event) => setRoom(event.target.value)} />
                <button className='container-button' onClick={joinRoom}>Join a Room</button>
            </div>
            )
            :(
                <Chat socket={socket} username={username} room={room} />
        </div>
    );
}

export default App;
{
    /* <Game></Game> */
}
{
    /* <Reducer></Reducer> */
}
