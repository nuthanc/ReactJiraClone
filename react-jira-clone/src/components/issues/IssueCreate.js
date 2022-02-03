import React from 'react';
import { Field, reduxForm } from 'redux-form';

const IssueCreate = (props) => {
  return (
    <div className="ui segment">
      <h1 className="ui header">Issue Create</h1>
    </div>
  );
};

export default reduxForm({
  form: 'issueCreate',
})(IssueCreate);
