import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import dayIcon from '../icons/day.svg'; 

const Nav = (props) => (
  <div className="nav">
    {/* <Link to="/home"> */}
    <h1 className="nav-title">
      <img src={dayIcon} alt="spinning sun icon" />
      SunSpotter 
      <img src={dayIcon} alt="spinning sun icon" />
    </h1>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
