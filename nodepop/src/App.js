//libraries imports
import React from 'react';

// local imports
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout';
import { LoginPage } from './components/auth';

function App({ isInitiallyLogged }) {

  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      {/* <Layout></Layout> */}
      {/* <LoginPage onLogin={handleLogin}/> */}
      {isLogged ? <Layout isLogged={isLogged} onLogout={handleLogout}/> : <LoginPage onLogin={handleLogin}/>}
    </div>
  );
}

export default App;
