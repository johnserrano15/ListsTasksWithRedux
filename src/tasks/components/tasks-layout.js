import React from 'react';

function TasksLayout (props) {
  return(
    <div id="Tasks">
      {props.children}
    </div>
  )
}

export default TasksLayout;
