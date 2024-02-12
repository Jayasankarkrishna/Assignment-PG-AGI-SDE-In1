// Message.js
import React from 'react';

const Message = ({ text, sender }) => {
    return (
        <div className={`message ${sender}`}>
            <h2>Hiring Process</h2>
            <p>{text}</p>
        </div>
    );
};

export default Message;