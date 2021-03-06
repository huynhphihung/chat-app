import React from 'react';
import { useState } from 'react';

const Chat = (socket, username, room) => {
    const [currentMessage, setCurrentMessage] = useState('');
    const sendMessage = async () => {
        if (currentMessage !== '') {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
            };
            socket.emit('send_message', messageData);
        }
    };
    return (
        <div>
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body"></div>
            <div className="chat-footer">
                <input type="text" placeholder="hey..." onChange={(event) => setCurrentMessage(event.target.value)} />
                <button onClick={sendMessage}>&#9657;</button>
            </div>
        </div>
    );
};

export default Chat;
