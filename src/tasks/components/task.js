import React from 'react'
import DeleteTask from './deleteTask';
import PropTypes from 'prop-types';

function Task(props) {
  const {
    id,
    text,
    handleDeleteTask,
    handleUpdateTask
  } = props;
  return (
    <li key={id} onClick={handleUpdateTask.bind(null, id, text)} >
      {text}
      <DeleteTask
        handleDeleteTask={handleDeleteTask}
        id={id}
      />
    </li>
  )
}

Task.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  handleUpdateTask: PropTypes.func,
  handleDeleteTask: PropTypes.func,
}

export default Task;
