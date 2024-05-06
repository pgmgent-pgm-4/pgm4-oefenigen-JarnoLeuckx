// LoginPage.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from './context/UserContext';

const LoginPage = () => {
  const { loginUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (loginUser(username, password)) {
      setError('');
      history.push('/welcome');
    } else {
      setError('Onjuiste gebruikersnaam of wachtwoord.');
    }
  };

  return (
    <div>
      <h2>Aanmelden</h2>
      <input
        type="text"
        placeholder="Gebruikersnaam"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Wachtwoord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Aanmelden</button>
      {error && <p>{error}</p>}
      <p>Nog geen account? <Link to="/signup">Registreer hier</Link>.</p>
    </div>
  );
};

export default LoginPage;