// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <Link to="/blog">Read Blog</Link>
    </div>
  );
}

export default Home;
