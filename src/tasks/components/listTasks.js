import React from 'react';
import DeleteTask from './deleteTask';
import './tasks.sass';

function ListTasks(props) {
  return(
    <ul className="ListTasks">
      <li>Task one.</li>
      {/* {console.log(props.items)} */}
      {props.items.map((item, index) => (
        <li key={item.id} onClick={props.handleUpdateTask.bind(null, item.id, item.text)} >
          {
            props.shouldHide != item.id ? (
              item.text
            ) : (
              <input
                ref={props.setRef}
                type="text"
                name="updateTask"
                onChange={props.handleChange}
                value={props.value}
              />
            )
          }
          <DeleteTask 
            handleDeleteTask={props.handleDeleteTask} 
            id={item.id} 
          />  
        </li>
      ))}
    </ul>
  )
}

export default ListTasks;