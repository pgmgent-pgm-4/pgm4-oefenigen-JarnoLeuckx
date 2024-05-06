// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './UserContext';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/welcome" component={WelcomePage} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;