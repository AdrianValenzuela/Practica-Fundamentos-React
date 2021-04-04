//libraries imports
import React from 'react';

// local imports
import logo from './logo.svg';
import './App.css';
import { ErrorMessage } from './components/shared/index.js'
import { Layout } from './components/layout';
import { LoginPage } from './components/auth';

function App() {

  const [isLogged, setIsLogged] = React.useState(false);
  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <div className="App">
      {/* <ErrorMessage message={"hola"} /> */}
      {/* <Layout></Layout> */}
      {/* <LoginPage onLogin={handleLogin}/> */}
      {isLogged ? <Layout isLogged={isLogged}/> : <LoginPage onLogin={handleLogin}/>}
    </div>
  );
}

export default App;
