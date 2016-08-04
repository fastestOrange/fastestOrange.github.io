import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  return (
    <div className={'content'}>
      <h1>BLOG ABOUT THINGS OF A TECHNICAL NATURE</h1>
      <nav>
        {generateMapMenu()}
      </nav>
      {children}
      <div>
        <h2>Chris Oliver</h2>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
