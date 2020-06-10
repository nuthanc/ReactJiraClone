import React from 'react';
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
