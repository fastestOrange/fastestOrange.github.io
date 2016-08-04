import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import bulma from 'bulma/css/bulma.css';
let cx = classNames.bind(bulma);

const propTypes = {
  children: PropTypes.element,
};

function Projects({ children }) {

  let className = cx({
    'box': true,
  });
  return (
    <div className={className}>
      <p>
        
      </p>
      {children ||
        <div><Link to="/about/project!">
          Projects
        </Link></div>}
    </div>
  );
}

Projects.propTypes = propTypes;

export default Projects;
