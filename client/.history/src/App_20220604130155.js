/* eslint-disable jsx-a11y/alt-text */
import './App.css';

function App() {
    return <div>This is my app</div>;
}

function YoutubeItem() {
    return (
        <div className="youtube-grid">
            <div className="video-image">
                <img src="https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1552&q=80" />
            </div>
            <div className='youtube-footer'>
                <div className='youtube'></div>
            </div>
        </div>
    );
}

export default App;
