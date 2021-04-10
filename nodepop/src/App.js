//libraries imports
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// local imports
import './App.css';
import { AdvertsPage, AdvertDetailPage, NewAdvertPage } from './components/adverts';
import { LoginPage } from './components/auth';
import { PageNotFound } from './components/layout';

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
      <Switch>
        <Route path='/advert/:id'>
          {routeProps => <AdvertDetailPage isLogged={isLogged} onLogout={handleLogout} {...routeProps}/>}          
        </Route>
        <Route path='/advert'>
          <NewAdvertPage isLogged={isLogged} onLogout={handleLogout} />
        </Route>
        <Route path='/login'>
          { isLogged ? <Redirect to='/' /> : <LoginPage onLogin={handleLogin} /> }
        </Route>
        <Route exact path='/'>
          <AdvertsPage isLogged={isLogged} onLogout={handleLogout} />
        </Route>        
        <Route path='/404' component={PageNotFound}/>
        <Route>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
