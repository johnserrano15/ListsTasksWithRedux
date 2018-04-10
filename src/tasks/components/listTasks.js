import React from 'react';
import DeleteTask from './deleteTask';
import UpdateTask from './updateTask';
import PropTypes from 'prop-types'

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

ListTasks.propTypes = {
  items: PropTypes.array.isRequired,
  shouldHide: PropTypes.number,
  value: PropTypes.string,
  setRef: PropTypes.func,
  handleChange: PropTypes.func,
  handleUpdateTask: PropTypes.func,
  handleSubmitUpdate: PropTypes.func,
  handleDeleteTask: PropTypes.func,
}

export default ListTasks;