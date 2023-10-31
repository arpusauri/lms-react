import React from 'react'
import { Link } from 'react-router-dom';

function Home
() {
  return (
    <div>
      <Link to="/login">
        <a>Login</a>
      </Link>
    </div>
  );
}

export default Home