// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css'


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {

                console.log('Login successful');
                setError('');
                // Simulate a delay for loading effect
                setTimeout(() => {
                    // Redirect to chatbot page upon successful login
                    navigate('/chat');
                }, 1000); // 1 second delay
                setSuccessMessage('Login successful');
                setError('');

            } else {
                // Handle error
                const errorMessage = await response.text();
                setError(errorMessage);
                setSuccessMessage('Login failed');
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        }finally {
            setLoading(false);
        }
    };

    return (
        <div>
        <div className='login'>
        <form onSubmit={handleLogin}>
            <div className='form-group'>
                <h2>Usermail</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            
            <br/><br/>

            <div className='form-group'>
            <h2>Password</h2>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            
            <br/><br/>
            <div className='submit'>
            <button type="submit" onClick={handleLogin} className='btn btn-primary' disabled={loading}>  {loading ? (
            <div className="spinner"></div>
            ) : (
             'Login'
             )}
            </button>
           
        </div>

            <br/><br/>
        </form>

        {error && <div style={{ color: 'black' }}>{error}</div>}

        {successMessage && <div style={{ color: 'black' }}>{successMessage}</div>}
        {loading && <div className="loading-message">Loading...</div>}

</div>
<br/><br/>
</div>
    );
};

export default LoginForm;






















// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/signup', { email, password });
//       setMessage(response.data);
//     } catch (error) {
//       setMessage(error.response.data);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       setMessage(response.data);
//     } catch (error) {
//       setMessage(error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h1>Authentication Example</h1>
//       <div>
//         <h2>Signup</h2>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button onClick={handleSignup}>Sign Up</button>
//       </div>
//       <div>
//         <h2>Login</h2>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;

