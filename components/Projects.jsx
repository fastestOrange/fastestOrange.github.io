import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function Projects({ children }) {
  return (
    <div>
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
