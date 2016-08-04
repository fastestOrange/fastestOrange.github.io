import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import bulma from 'bulma/css/bulma.css';
let cx = classNames.bind(bulma);

function Home() {

  let content = cx({'content':true})

  return (
    <div className={content}>
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
