import React from 'react';
import PropTypes from 'prop-types';

const DeleteTask = ({ handleDeleteTask, id }) => (
  <button onClick={handleDeleteTask} id={id}>
    Delete
  </button>
);

DeleteTask.propTypes = {
  handleDeleteTask: PropTypes.func
};

export default DeleteTask;
