import React from 'react';
import { useState } from 'react';

const Chat = (socket, username, room) => {
    const [currentMessage, setCurrentMessage] = useState("")
    const sendMessage = () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" new Date(Date.now)
            }
        }
    }
    return (
        <div>
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body"></div>
            <div className="chat-footer">
                <input type="text" placeholder="hey..." onChange={(event) => setCurrentMessage(event.target.value)} />
                <button style={{width: 18}}>&#9657;</button>
            </div>
        </div>
    );
};

export default Chat;
