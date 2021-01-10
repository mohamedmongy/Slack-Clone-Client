import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllUsers from './home';
import Register from './Register';
import LoginComp from './Login';

 function AnotherCom() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={AllUsers} />
            <Route path="/login" exact component={LoginComp} />
            <Route path="/register" exact component={Register} />
          </Switch>
      </Router>
    );
  }

  export default AnotherCom;