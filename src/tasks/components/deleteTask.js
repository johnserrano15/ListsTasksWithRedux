import React from 'react';
import PropTypes from 'prop-types';

const DeleteTask = (props) => (
  <button 
    onClick={props.handleDeleteTask.bind(null, props.id)} 
    id={props.id}
  >
    Delete
  </button> 
)

DeleteTask.propTypes = {
  handleDeleteTask: PropTypes.func,
}

export default DeleteTask;