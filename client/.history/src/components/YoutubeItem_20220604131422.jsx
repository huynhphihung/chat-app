/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './YoutubeItem.css';

const YoutubeItem = () => {
    return (
        <div className="youtube-list">
            <div className="youtube-image">
                <img src="https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1552&q=80" />
            </div>
            <div className="youtube-footer">
                <div className="youtube-avatar">
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div className="youtube-info">
                    <div className="youtube-title">Learning reactjs</div>
                    <div className="youtube-author">evondev</div>
                </div>
            </div>
        </div>
    );
};

export default YoutubeItem;
