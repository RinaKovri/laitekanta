import React, { useState } from 'react';
import Modal from 'react-modal';
import './loginButton.css'

const LoginButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    // Your login logic goes here
    console.log('Logging in with username:', username, 'and password:', password);
    setUsername('');
    setPassword('');
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal} className='logbtn'>Kirjaudu sisään</button>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h2>Kirjaudu sisään</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
};

export default LoginButton;

