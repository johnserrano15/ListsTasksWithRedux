import React from 'react';
import UpdateTask from './updateTask';
import Task from './task';
import PropTypes from 'prop-types';

import './tasks.sass';

function ListTasks(props) {
  const { items, shouldHide } = props;
  // console.log(props.items);
  return (
    <ul className="ListTasks">
      {items.map((item, index) => {
        return shouldHide != item.id ? (
          <Task key={item.id} {...item} {...props} />
        ) : (
          <UpdateTask key={item.id} {...props} id={item.id} />
        );
      })}
    </ul>
  );
}

ListTasks.propTypes = {
  items: PropTypes.array.isRequired,
  shouldHide: PropTypes.number
};

export default ListTasks;
