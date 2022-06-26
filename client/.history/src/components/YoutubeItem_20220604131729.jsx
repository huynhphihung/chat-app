/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './YoutubeItem.css';

const YoutubeItem = (props) => {
    return (
        <div className="youtube-list">
            <div className="youtube-image">
                <img src={props.image} />
            </div>
            <div className="youtube-footer">
                <div className="youtube-avatar">
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div className="youtube-info">
                    <h3 className="youtube-title">Learning reactjs</h3>
                    <h4 className="youtube-author">evondev</h4>
                </div>
            </div>
        </div>
    );
};

export default YoutubeItem;
