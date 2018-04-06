import React from 'react'

const UpdateTask = (props) => (
  <form
    className="formUpdate"
    onSubmit={props.handleSubmitUpdate}
  >
    <input
      ref={props.setRef}
      type="text"
      name="updateTask"
      onChange={props.handleChange}
      value={props.value}
    />
    <input type="hidden" name="idTask" defaultValue={props.id} />
    <input type="submit" id="submitUpdateTask" value="update"/>
  </form>
)

export default UpdateTask;
