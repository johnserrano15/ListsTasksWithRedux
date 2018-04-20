import React, { Component } from 'react';
import TasksLayout from '../../tasks/components/tasks-layout';
import AddTask from '../components/addTask';
import ListTasks from '../components/listTasks';
import { connect } from 'react-redux';

class Tasks extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: '',
    //   shouldHide: 0
    // };
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

    // console.log(newItems)

    // this.setState({
    //   items: newItems
    // });

    this.props.dispatch({
      type: 'DELETE_TASK',
      payload: {
        id
      }
    });
  };

  handleUpdateTask = (id, text) => {
    // console.log('Hola update', id)
    this.props.dispatch({
      type: 'UPDATE_TASK',
      payload: {
        value: text,
        shouldHide: id
      }
    });
  };

  setInputUpdateRef = element => {
    this.inputUpdate = element;
  };

  handleChange = event => {
    // console.log('modificando');
    this.props.dispatch({
      type: 'CHANGE_TASK',
      payload: {
        value: this.inputUpdate.value
      }
    });
  };

  handleSubmitUpdate = event => {
    event.preventDefault();
    // console.log(event.target.idTask.value)
    const id = event.target.idTask.value;

    this.props.dispatch({
      type: 'SUBMIT_UPDATE',
      payload: {
        id,
        text: this.inputUpdate.value
      }
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
          value={this.props.value}
          shouldHide={this.props.shouldHide}
          handleSubmitUpdate={this.handleSubmitUpdate}
        />
      </TasksLayout>
    );
  }
}

export default connect()(Tasks);
