/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import YoutubeItem from './components/YoutubeItem';
import './components/YoutubeItem.css';

function App() {
    return (
        <div className="youtube-grid">
            <YoutubeItem />
            <YoutubeItem />
            <YoutubeItem />
            <YoutubeItem />
        </div>
    );
}

// function YoutubeItem() {
//     return (

//     );
// }

export default App;
