import React from 'react';
import PropTypes from 'prop-types';

function Task(props) {
  const { id, text, handleUpdateTask } = props;
  return (
    <li key={id}>
      <span onClick={handleUpdateTask}>{text}</span>
      {props.children}
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  handleUpdateTask: PropTypes.func
};

export default Task;
