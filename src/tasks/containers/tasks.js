import React, { Component } from 'react';
import TasksLayout from '../../tasks/components/tasks-layout';
import AddTask from '../components/addTask';
import ListTasks from '../components/listTasks';

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      items: [],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.input.value, 'submit');
    if (!this.input.value.length) {
      return;
    }

    const newItem = {
      text: this.input.value,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
    }));

    this.input.value = '';
  }

  setInputref = (element) => {
    this.input = element;
  }

  render() {
    return (
      <TasksLayout>
        <AddTask
          setRef={this.setInputref}
          handleSubmit={this.handleSubmit}
        />
        <h3>Hola mundo {this.props.name}</h3>
        <p>Agregar la siguiente task {this.state.items.length + 2}</p>
        <ListTasks items={this.state.items} />
      </TasksLayout>
    )
  }
}

export default Tasks;