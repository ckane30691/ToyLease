import React from 'react';
import {Link} from 'react-router-dom';

const sessionLinks = (dummyLogin) => (
	<nav className="login-signup">
		<Link to="/login">Sign In!</Link>
		<Link to="/signup">Sign up!</Link>
		<button className="demo-button" onClick={dummyLogin}>Demo</button>
	</nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
		<Link to="/toys/new">Post a new Toy!</Link>
		<Link to="leasings">Leasings</Link>
		<h2 className="header-name">Welcome Back,&nbsp; {currentUser.username}</h2>
		<button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout, dummyLogin }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(dummyLogin)
);

export default Greeting;
