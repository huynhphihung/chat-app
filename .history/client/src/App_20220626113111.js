/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import io from 'socket.io-client'
// import Reducer from './components/Reducer/Reducer';
// import Game from './components/tictactoe/Game';

const socket = io.connect

function App() {
    return (
        <div>
            {/* <Game></Game> */}
            {/* <Reducer></Reducer> */}
        </div>
    );
}

export default App;
