import React, { Component } from 'react';
import TasksLayout from '../../tasks/components/tasks-layout';

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  render() {
    return (
      <TasksLayout>
        <h3>Hola mundo {this.props.name}</h3>
      </TasksLayout>
    )
  }
}

export default Tasks;