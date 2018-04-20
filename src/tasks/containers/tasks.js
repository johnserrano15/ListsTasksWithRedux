import React, { Component } from 'react';
import TasksLayout from '../../tasks/components/tasks-layout';
import AddTask from '../components/addTask';
import ListTasks from '../components/listTasks';
import { connect } from 'react-redux';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      value: '',
      shouldHide: 0
    };
  }

  handleAddtask = event => {
    event.preventDefault();
    // console.log(this.input.value, 'submit');

    this.props.dispatch({
      type: 'AGG_TASK',
      payload: {
        value: this.input.value
      }
    });

    this.input.value = '';
  };

  setInputref = element => {
    this.input = element;
  };

  handleDeleteTask = id => {
    // console.log(id)
    const items = this.state.items;
    // console.info(items);
    // Limpiando array sin mutar el array siendo -> inmutable
    const newItems = items.filter(e => e.id !== id);
    // console.log(newItems)

    this.setState({
      items: newItems
    });
  };

  handleUpdateTask = (id, text) => {
    // console.log('Hola update', id)
    // console.info(this.inputUpdate.value)
    this.setState({
      shouldHide: id,
      value: text
    });
  };

  setInputUpdateRef = element => {
    this.inputUpdate = element;
  };

  handleChange = event => {
    // console.log('modificando');
    this.setState({
      // value: event.target.value,
      value: this.inputUpdate.value
    });
  };

  handleSubmitUpdate = event => {
    event.preventDefault();
    // console.log(event.target.idTask.value)
    const items = this.state.items;
    const id = event.target.idTask.value;

    const newItems = items.map(e => {
      // console.log(e)
      // console.info(id)
      if (e.id == id) {
        e.text = this.inputUpdate.value;
      }
      return e;
    });

    // console.log(newItems)

    this.setState({
      items: newItems,
      shouldHide: 0
    });
  };

  render() {
    return (
      <TasksLayout>
        <AddTask setRef={this.setInputref} handleAddtask={this.handleAddtask} />
        <h3>Hola mundo {this.props.name}</h3>
        <p>Agregar la siguiente task {this.props.items.length + 1}</p>
        <ListTasks
          items={this.props.items}
          handleUpdateTask={this.handleUpdateTask}
          handleDeleteTask={this.handleDeleteTask}
          handleChange={this.handleChange}
          setRef={this.setInputUpdateRef}
          value={this.state.value}
          shouldHide={this.state.shouldHide}
          handleSubmitUpdate={this.handleSubmitUpdate}
        />
      </TasksLayout>
    );
  }
}

export default connect()(Tasks);
