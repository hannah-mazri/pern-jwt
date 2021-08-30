import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

import './index.css';

function App() {
  const [isAuthenticated, setTisAuthenticated] = useState(false);

  const setAuth = (boolean) => setTisAuthenticated(boolean);

  return (
    <Fragment>
      <Router>
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/login'
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to='/dashboard' />
                )
              }
            />
            <Route
              exact
              path='/register'
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
            <Route
              exact
              path='/dashboard'
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
