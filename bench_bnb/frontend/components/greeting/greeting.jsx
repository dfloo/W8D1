import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const personalGreeting = () => (
    <div>
      <h2>Hi, {currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to='/login'>Login</Link>
      &nbsp;or&nbsp;
      <Link to='signup'>Sign Up</Link>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
