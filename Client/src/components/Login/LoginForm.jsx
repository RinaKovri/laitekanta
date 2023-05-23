import React, { useState } from 'react';
import './loginButton.css';
import Axios from 'axios';
import MainPage from '../mainPage';
import './loginButton.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const checkCredentials = () => {
        Axios.post("http://localhost:3001/api/laitekanta", {
            username: username,
            password: password
        })
            .then((response) => {
                const isValid = response.data.isValid;
                if (isValid) {
                    // Credentials are correct
                    //   setErrorMessage('');
                    setIsLoggedIn(true);
                } else {
                    // Credentials are incorrect
                    setErrorMessage('Invalid username or password');
                }
            })
            .catch((error) => {
                // Handle error
                console.error(error);
                setErrorMessage('Username or password are incorrect');
            });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };


    if (isLoggedIn) {
        return (
            <>
                <MainPage />
                <button onClick={handleLogout} className="logout">
                    Kirjaudu ulos
                </button>
            </>
        )
    }
    else

        return (
            <div className='modal'>
                <h2>Please enter username and password</h2>
                <form className='loginForm' onSubmit={(e) => { e.preventDefault(); checkCredentials(); }}>
                    <input
                        type="text"
                        placeholder="Username"
                        style={{ width: '200px', height: '30px', textAlign: 'center' }}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={{ width: '200px', height: '30px', textAlign: 'center' }}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">{errorMessage}</div>
                    <input type="button" className='loginbtn' onClick={checkCredentials} value='Login' />
                </form>
            </div>

        );
};

export default LoginForm;
