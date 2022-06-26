import React from 'react';

const Chat = (socket, username, room) => {
    return (
        <div>
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body"></div>
            <div className="chat-footer">
                <input type="text" placeholder="hey..." />
                <button style={{fontSize: 18}}>&#9657</button>
            </div>
        </div>
    );
};

export default Chat;
