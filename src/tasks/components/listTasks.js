import React from 'react';
import DeleteTask from './deleteTask';

function ListTasks(props) {
  return(
    <ul className="ListTasks">
      <li>Task one.</li>
      {/* {console.log(props.items)} */}
      {props.items.map((item, index) => (
        <li key={item.id}>{item.text} <DeleteTask handleDeleteTask={props.handleDeleteTask} id={item.id} />  </li>
      ))}
    </ul>
  )
}

export default ListTasks;