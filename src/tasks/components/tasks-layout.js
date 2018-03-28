import React from 'react';

function TasksLayout (props) {
  return(
    <div id="listTasks">
      {props.children}
    </div>
  )
}

export default TasksLayout;
