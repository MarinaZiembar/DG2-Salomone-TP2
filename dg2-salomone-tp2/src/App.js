import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routes} from './utils/Routes';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
      {
        routes.map((route,i) => (
          <Route
            key={i}
            component={route.component}
            exact path={route.path}
          />
        ))
      }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
