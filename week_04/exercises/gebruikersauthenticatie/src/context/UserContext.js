// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const loginUser = (username, password) => {
    // Hier zou je de gebruikersnaam en wachtwoord kunnen controleren met vooraf gedefinieerde waarden
    if (username === 'voorbeeld' && password === 'geheim') {
      setLoggedInUser(username);
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};