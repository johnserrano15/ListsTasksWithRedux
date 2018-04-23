import React from 'react';

const AddTodo = ({ onAddClick, setRef }) => {
  // let input;
  return (
    <div>
      <input ref={setRef} />
      <button onClick={onAddClick}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
