// // ChatInterface.js
// import React, { useState } from 'react';
// import Message from './Message';
// import './ChatInterface.css'; // Import CSS file for styling

// const questions = [
//     'Can you tell me about your previous work experience?',
//     'What are your strengths?',
//     'Why do you want to work at our company?',
//     'How do you handle tight deadlines?',
//     'What is your approach to problem-solving?',
//     'Can you give an example of a challenging project you completed?',
//     'What motivates you in your work?',
//     'How do you handle conflicts in a team?',
//     'Where do you see yourself in 5 years?',
//     'What sets you apart from other candidates?',
//     'What do you like to do outside of work?',
// ];

// const ChatInterface = () => {
//     const [messages, setMessages] = useState([]);
//     const [inputMessage, setInputMessage] = useState('');
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//     const handleResponse = () => {
//         if (inputMessage.trim() !== '') {
//             setMessages([...messages, { text: inputMessage, sender: 'user' }]);
//             setInputMessage('');
//             if (currentQuestionIndex < questions.length - 1) {
//                 setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//             }
//         }
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < questions.length) {
//             setMessages([...messages, { text: questions[currentQuestionIndex], sender: 'bot' }]);
//         }
//     };

//     return (
//         <div className="chat-interface">
//             <div className="chat-box">
//                 {messages.map((message, index) => (
//                     <Message key={index} text={message.text} sender={message.sender} />
//                 ))}
//             </div>
//             <div className="input-box">
//                 {currentQuestionIndex < questions.length ? (
//                     <>
//                         <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
//                         <button onClick={handleResponse}>Send</button>
//                     </>
//                 ) : (
//                     <p>Thank you for your responses.</p>
//                 )}
//             </div>
//             {currentQuestionIndex < questions.length && (
//                 <button onClick={handleNextQuestion}>Next Question</button>
//             )}
//         </div>
//     );
// };

// export default ChatInterface;






import React, { useState } from 'react';
import Message from './Message';
import './ChatInterface.css'; // Import CSS file for styling

const questions = [
    'Can you tell me about your previous work experience?',
    'What are your strengths?',
    'Why do you want to work at our company?',
    // Add more questions as needed
];

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleResponse = () => {
        if (inputMessage.trim() !== '') {
            const newAnswers = { ...answers, [questions[currentQuestionIndex]]: inputMessage };
            setAnswers(newAnswers);
            setMessages([...messages, { text: inputMessage, sender: 'user' }]);
            setInputMessage('');
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            } else {
                setMessages([
                    ...messages,
                    { text: 'Thank you for your responses.', sender: 'bot' },
                    ...Object.entries(newAnswers).map(([question, answer]) => ({ text: `${question}: ${answer}`, sender: 'bot' })),
                ]);
            }
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length) {
            setMessages([...messages, { text: questions[currentQuestionIndex], sender: 'bot' }]);
        }
    };

    return (
    
        <div className="chat-interface">
            <div className="chat-box">
                {messages.map((message, index) => (
                    <Message key={index} text={message.text} sender={message.sender} />
                ))}
            </div>
            <div className="input-box">
                {currentQuestionIndex < questions.length ? (
                    <>
                        <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} /><br/><br/>
                        <button onClick={handleResponse}>Send</button><br/>
                    </>
                ) : (
                    <p>Thank you for your responses.</p>
                )}
            </div><br/>
            {currentQuestionIndex < questions.length && (
                <button onClick={handleNextQuestion} class="btn btn-primary">Next Question</button>
            )}
        </div>
    );
};

export default ChatInterface;







