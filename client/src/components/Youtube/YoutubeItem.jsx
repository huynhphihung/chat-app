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
                    <img src={props.avatar} />
                </div>
                <div className="youtube-info">
                    <h3 className="youtube-title">{props.title}</h3>
                    <h4 className="youtube-author">{props.author}</h4>
                </div>
            </div>
        </div>
    );
};

export default YoutubeItem;
