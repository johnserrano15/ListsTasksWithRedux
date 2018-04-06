import React from 'react';
import DeleteTask from './deleteTask';
import UpdateTask from './updateTask';

import './tasks.sass';

function ListTasks(props) {
  return(
    <ul className="ListTasks">
      <li>Task one.</li>
      {props.items.map((item, index) => {
        return props.shouldHide != item.id ? ( 
          <li key={item.id} onClick={props.handleUpdateTask.bind(null, item.id, item.text)} >
            {item.text}
            <DeleteTask
              handleDeleteTask={props.handleDeleteTask}
              id={item.id}
            />
          </li>
        ) : (
          <UpdateTask
            key={item.id}
            setRef={props.setRef}
            handleChange={props.handleChange}
            value={props.value}
            handleSubmitUpdate={props.handleSubmitUpdate}
            id={item.id}
          /> 
        )    
      })}
    </ul>
  )
}

export default ListTasks;