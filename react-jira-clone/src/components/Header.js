import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import { connect } from 'react-redux';

const Header = ({ name }) => {
  // console.log('IN header');
  // console.log(`${name} in Header`)
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
        <div><h4 style={{marginRight: '10px'}}>{name}</h4></div>
        <GoogleAuth />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log('In header mapStateToProps component\nstate');
  // console.log(state);
  const { name } = state.auth;
  // console.log(name);
  return { name };
};

export default connect(mapStateToProps)(Header);
