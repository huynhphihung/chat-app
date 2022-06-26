/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import io from 'socket.io-client';
// import Reducer from './components/Reducer/Reducer';
// import Game from './components/tictactoe/Game';

const socket = io.connect('http://localhost:3001');

function App() {
    return (
        <div className='App'>
            <h3>Join a Chat app</h3>
            <input placeholder='John'></input>
            <input placeholder='Room ID'></input>
            <button></button>
        </div>
    );
}

export default App;
{/* <Game></Game> */}
{/* <Reducer></Reducer> */}