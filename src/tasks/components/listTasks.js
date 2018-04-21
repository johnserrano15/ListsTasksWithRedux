import React from 'react';
import UpdateTask from './updateTask';
import Task from './task';
import PropTypes from 'prop-types';
import DeleteTask from './deleteTask';

import './tasks.sass';

function ListTasks(props) {
  const { items, shouldHide, handleDeleteTask } = props;
  // console.log(props.items);
  return (
    <ul className="ListTasks">
      {items.map((item, index) => {
        return shouldHide != item.id ? (
          <Task key={item.id} {...item} {...props}>
            <DeleteTask handleDeleteTask={handleDeleteTask} id={item.id} />
          </Task>
        ) : (
          <UpdateTask key={item.id} {...props} id={item.id} />
        );
      })}
    </ul>
  );
}

ListTasks.propTypes = {
  items: PropTypes.array.isRequired,
  shouldHide: PropTypes.number,
  handleDeleteTask: PropTypes.func
};

export default ListTasks;
