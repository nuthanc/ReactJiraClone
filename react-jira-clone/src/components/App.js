import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './Header';

import IssueCreate from './issues/IssueCreate';
import IssueList from './issues/IssueList';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/issues" exact component={IssueList} />
            <Route path="/issues/new" exact component={IssueCreate} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
