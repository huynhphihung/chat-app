/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import YoutubeItem from './components/Youtube/YoutubeItem';
import './components/Youtube/YoutubeItem.css';
import { YoutubeData } from './YoutubeData';
import Toggle from './components/state/Toggle';

function App() {
    return (
        <div className="youtube-grid">
            {YoutubeData.map((item, index) => (
                <YoutubeItem
                    key={item.id}
                    image={item.image || item.avatar}
                    avatar={item.avatar}
                    author={item.author}
                    title={item.title}
                ></YoutubeItem>
            ))}
        </div>
    );
}

export default App;
