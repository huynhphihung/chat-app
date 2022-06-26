/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import YoutubeItem from './components/YoutubeItem';
import './components/YoutubeItem.css';
import { YoutubeData } from './YoutubeData';

function App() {

    console.log(YoutubeData);

    return (
        <div className="youtube-grid">
            {YoutubeData.map((item, index) => (
                <div>
            ))}
            <YoutubeItem
                image="https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1552&q=80"
                avatar="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80z"
                title="Learning ReactJS"
                author="Evondev"
            ></YoutubeItem>
        </div>
    );
}

export default App;
