import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Chat = ({ socket, username, room }) => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const sendMessage = async () => {
        if (currentMessage !== '') {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
            };

            await socket.emit('send_message', messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage('');
        }
    };

    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log(data);
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">
                {messageList.map((item, key) => (
                    <div className='message'>
                        <div className="message-content">
                            <p>{item.message}</p>
                        </div>
                        <div className="message-meta">
                            <p>{item.time}</p>
                            <p>{item.author}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="chat-footer">
                <input type="text" placeholder="hey..." onChange={(event) => setCurrentMessage(event.target.value)} />
                <button onClick={sendMessage}>&#9657;</button>
            </div>
        </div>
    );
};

export default Chat;
