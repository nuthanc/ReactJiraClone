import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import IssueCreate from './issues/IssueCreate';
import IssueList from './issues/IssueList';

const App = () => {
  return (
    <div>
      <IssueCreate />
      <IssueList />
    </div>
  );
};

export default App;
