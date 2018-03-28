import React from 'react';

function ListTasks(props) {
  return(
    <ul className="ListTasks">
      <li>Task one.</li>
      {/* {console.log(props.items)} */}
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

export default ListTasks;