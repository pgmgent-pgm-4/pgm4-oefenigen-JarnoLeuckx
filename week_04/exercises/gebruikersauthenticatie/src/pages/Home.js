// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './context/UserContext';

const WelcomePage = () => {
  const { loggedInUser, logoutUser } = useUser();

  return (
    <div>
      <h2>Welkom, {loggedInUser}!</h2>
      <button onClick={logoutUser}>Uitloggen</button>
      <p>Keer terug naar <Link to="/">Aanmeldpagina</Link>.</p>
    </div>
  );
};

export default WelcomePage;