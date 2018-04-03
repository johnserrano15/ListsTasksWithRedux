import React from 'react';

const DeleteTask = (props) => (
  <button 
    onClick={props.handleDeleteTask.bind(null, props.id)} 
    id={props.id}
  >
    Delete
  </button> 
)

export default DeleteTask;