import React, { Component } from 'react';
import { IndexRoute, hashHistory, Route, Router } from 'react-router';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import Users from './Users.jsx';
import Documents from './Documents.jsx';

class Main extends Component {
  render() {
    return (
      // <div>
      //   <Home />
      // </div>
      <Router history={hashHistory} path="/">
        <IndexRoute component={Home} />
        <Route component={Dashboard} path="dashboard" />
        <Route component={Users} path="users" />
        <Route component={Documents} path="documents" />
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
