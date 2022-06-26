import React from 'react';
import { useState } from 'react';

const Chat = (socket, username, room) => {
    const [currentMessage, setCurrentMessage] = useState()
    return (
        <div>
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body"></div>
            <div className="chat-footer">
                <input type="text" placeholder="hey..." />
                <button style={{width: 18}}>&#9657;</button>
            </div>
        </div>
    );
};

export default Chat;
