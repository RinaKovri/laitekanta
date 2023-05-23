import React, { useState } from 'react';
import './loginButton.css';
import LoginForm from './LoginForm';

const LogoutButton = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    setIsLoggedOut(true);
  };

  if (isLoggedOut) {
    return <LoginForm />;
  }

  return (
    <>
      <button onClick={handleLogout} className='logbtn'>
        Kirjaudu ulos
      </button>
    </>
  );
};

export default LogoutButton;
