import React from 'react';

const Task = (props) => (
  <form
    className="Task"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Agregar Task"
      name="task"
    />
    <button id="aggTask">Agg Task</button>
  </form>
)

export default Task;