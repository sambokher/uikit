import React from 'react';
import PropTypes from 'prop-types';

function Button({what}) {
  return (
    <div className={what}>
       The Hardest Button to Button
    </div>
  );
}

Button.propTypes = {
  what: PropTypes.string
}


export default Button;