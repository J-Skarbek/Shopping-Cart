import React from 'react';
import PropTypes from 'prop-types';

const RenderName = (props) => {
  return (
    <div>{props.name}</div>
  );
}

RenderName.propTypes = {
  name: PropTypes.string.isRequired
}

RenderName.defaultProps = {
  name: 'John'
}

export default RenderName;