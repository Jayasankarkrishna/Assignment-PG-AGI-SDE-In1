// // SignupForm.js
// import React, { useState } from 'react';
// import './style.css'


// const SignupForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/api/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });
//             if (response.ok) {
//                 // Redirect or show success message
//                 console.log('Signup successful');
//             } else {
//                 // Handle error
//                 console.error('Signup failed');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className='signup'>
//         <form onSubmit={handleSignup}>
//             <div className='form-group'>

//             <h2>Usermail</h2>

//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            
//             </div>
            
//             <br/><br/>

//             <div className='form-group'>

//             <h2>Password</h2>

//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
//             </div>


//             <br/><br/>
//             <button type="submit"onClick={handleSignup}className='btn btn-primary'>Signup</button><br/><br/>
//         </form>


//         </div>
//     );
// };

// export default SignupForm;


// SignupForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                // Signup successful
                setSuccessMessage('Signup successful. Redirecting to login page...');
                setError('');
                // Redirect to login page after a brief delay
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                // Signup failed
                const errorMessage = await response.text();
                setError(errorMessage);
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
            setSuccessMessage('');
        }
    };

    return (
        <div className='signup'>
            <form onSubmit={handleSignup}>
                <div className='form-group'>
                    <h2>Email</h2>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br/><br/>
                <div className='form-group'>
                    <h2>Password</h2>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br/><br/>
                <button type="submit" onClick={handleSignup} className='btn btn-primary'>Signup</button><br/><br/>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        </div>
    );
};

export default SignupForm;

