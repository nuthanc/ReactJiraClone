import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui inverted large menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/issues" className="item">
        Issues List
      </Link>
      <Link to="/issues/new" className="item">
        Create Issues
      </Link>
      <div className="right item">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
