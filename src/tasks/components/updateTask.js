import React from 'react';
import PropTypes from 'prop-types';

const UpdateTask = (props) => {
  const {
    handleSubmitUpdate,
    handleChange,
    value,
    id,
    setRef
  } = props;
  
  return(
    <form
      className="formUpdate"
      onSubmit={handleSubmitUpdate}
    >
      <input
        ref={setRef}
        type="text"
        name="updateTask"
        onChange={handleChange}
        value={value}
      />
      <input type="hidden" name="idTask" defaultValue={id} />
      <input type="submit" id="submitUpdateTask" value="update" />
    </form>
  )
}

UpdateTask.propTypes = {
  value: PropTypes.string,
  setRef: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmitUpdate: PropTypes.func,
}

export default UpdateTask;
