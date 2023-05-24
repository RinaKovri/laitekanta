import React, { useState } from 'react';
import Modal from 'react-modal';
import './loginButton.css';
import Axios from 'axios';

const LoginButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const checkCredentials = () => {
    Axios.post("http://localhost:3001/api/laitekanta/users", {
      username: username,
      password: password
    })
      .then((response) => {
        const isValid = response.data.isValid;
        if (isValid) {
          // Credentials are correct
          setErrorMessage('');
          handleLogin();
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

  const handleLogin = () => {
    // Handle successful login
    setUsername('');
    setPassword('');
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal} className='logbtn'>Kirjaudu sisään</button>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} className='modal'>
          <h2>Please enter username and password</h2>
          <form className='loginForm' onSubmit={(e) => { e.preventDefault(); checkCredentials(); }}>
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              type="text"
              autoComplete="username"
              required
              id="username"
              value={username}
              style={{width: '200px', height: '30px'}}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              autoComplete="current-password"
              required
              id="password"
              type="password"
              value={password}
              style={{width: '200px', height: '30px'}}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="invalid-feedback">{errorMessage}</div>
            <button type="submit" className='submitbtn'>Submit</button>
          </form>
      </Modal>
    </>
  );
};

export default LoginButton;
