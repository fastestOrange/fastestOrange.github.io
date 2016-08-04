import React from 'react';
import { Link } from 'react-router';

function Home() {

  return (
    <div>
      <div>
        <Link to="/About">About</Link>
      </div>
      <div>
        <Link to="/About/projects"></Link>
      </div>
    </div>
  );
}

export default Home;
