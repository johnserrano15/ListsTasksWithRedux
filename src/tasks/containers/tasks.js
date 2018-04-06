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
      value: '',
      shouldHide: '',
    }
  }

  handleAddtask = (event) => {
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
      shouldHide: '',
    }));

    this.input.value = '';
  }

  setInputref = (element) => {
    this.input = element;
  }

  handleDeleteTask = (id) => {
    // console.log(id)
    const items = this.state.items;
    // console.info(items);
    // Limpiando array sin mutar el array siendo -> inmutable 
    const newItems = items.filter( e => e.id !== id);
    // console.log(newItems)

    this.setState({
      items: newItems
    });
  }

  handleUpdateTask = (id, text) => {
    console.log('Hola update', id)
    // console.info(this.inputUpdate.value)
    this.setState({
      shouldHide: id,
      value: text,
    });
  }

  setInputUpdateRef = (element) => {
    this.inputUpdate = element;
  }

  handleChange = (event) => {
    console.log('modificando');
    this.setState({
      // value: event.target.value,
      value: this.inputUpdate.value,
    })
  }

  render() {
    return (
      <TasksLayout>
        <AddTask
          setRef={this.setInputref}
          handleAddtask={this.handleAddtask}
        />
        <h3>Hola mundo {this.props.name}</h3>
        <p>Agregar la siguiente task {this.state.items.length + 2}</p>
        <ListTasks 
          items={this.state.items} 
          handleUpdateTask={this.handleUpdateTask} 
          handleDeleteTask={this.handleDeleteTask}
          handleChange={this.handleChange}
          setRef={this.setInputUpdateRef}
          value={this.state.value}
          shouldHide={this.state.shouldHide}
        />
      </TasksLayout>
    )
  }
}

export default Tasks;