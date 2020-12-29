import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllUsers from './home';

 function AnotherCom() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={AllUsers} />
          </Switch>
      </Router>
    );
  }

  export default AnotherCom;