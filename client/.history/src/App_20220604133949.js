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
                <YoutubeItem key={item.id} image={item.image} avatar={item.avatar} author={item.author}></YoutubeItem>
            ))}
        </div>
    );
}

export default App;
