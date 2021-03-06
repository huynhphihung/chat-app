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
                <button>&#9658; </button>
            </div>
        </div>
    );
};

export default Chat;
