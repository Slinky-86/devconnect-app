import React from 'react';

function MessageDisplay({ messages }) {
    return (
        <div className='message-display' style={{overflowY:'auto', flex:1, backgroundColor: 'white'}}>
            {messages.map((message, index) => (
                <div key={index} style={{padding: '10px', marginBottom:'10px', backgroundColor:'#f0f0f0', borderRadius:'10px'}}>
                    <p>{message.text}</p>
                </div>
            ))}
        </div>
    );
}

export default MessageDisplay;