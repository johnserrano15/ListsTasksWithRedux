import React, { Component } from 'react';
import TasksLayout from '../../tasks/components/tasks-layout';
import AddTask from '../components/addTask';
import ListTasks from '../components/listTasks';
import { connect } from 'react-redux';
import Search from '../components/search';
import {
  aggTask,
  deleteTask,
  updateTask,
  changetask,
  submitUpdate,
  submitSearch
} from '../../actions/index';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSearch: ''
    };
  }

  handleAddtask = event => {
    event.preventDefault();
    // console.log(this.input.value, 'submit');

    /* this.props.dispatch({
      type: 'AGG_TASK',
      payload: {
        value: this.input.value
      }
    }); */

    this.props.aggTask(this.input.value);

    this.input.value = '';
  };

  setInputref = element => {
    this.input = element;
  };

  handleDeleteTask = id => {
    // console.log(id)
    /* this.props.dispatch({
      type: 'DELETE_TASK',
      payload: {
        id
      }
    }); */

    this.props.deleteTask(id);
  };

  handleUpdateTask = (id, text) => {
    // console.log('Hola update', id)
    /* this.props.dispatch({
      type: 'UPDATE_TASK',
      payload: {
        value: text,
        shouldHide: id
      }
    });
 */
    this.props.updateTask(id, text);
  };

  setInputUpdateRef = element => {
    this.inputUpdate = element;
  };

  handleChange = event => {
    // console.log('modificando');
    /* this.props.dispatch({
      type: 'CHANGE_TASK',
      payload: {
        value: this.inputUpdate.value
      }
    }); */

    this.props.changetask(this.inputUpdate.value);
  };

  handleSubmitUpdate = event => {
    event.preventDefault();
    // console.log(event.target.idTask.value)
    const id = event.target.idTask.value;

    /* this.props.dispatch({
      type: 'SUBMIT_UPDATE',
      payload: {
        id,
        text: this.inputUpdate.value
      }
    });
 */
    this.props.submitUpdate(id, this.inputUpdate.value);
  };

  setInputSearch = element => {
    this.inputSearch = element;
  };

  handleChangeSearch = event => {
    this.setState({
      valueSearch: this.inputSearch.value
    });
  };

  handleSearch = event => {
    event.preventDefault();

    /* this.props.dispatch({
      type: 'SUBMIT_SEARCH',
      payload: {
        query: this.inputSearch.value,
        items: this.props.items
      }
    }); */

    this.props.submitSearch(this.inputSearch.value, this.props.items);
  };

  render() {
    return (
      <TasksLayout>
        <AddTask setRef={this.setInputref} handleAddtask={this.handleAddtask} />
        <h3>Hola mundo {this.props.name}</h3>
        <Search
          setRef={this.setInputSearch}
          value={this.state.valueSearch}
          handleChange={this.handleChangeSearch}
          handleSearch={this.handleSearch}
        />
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

const mapDispatchToProps = {
  aggTask,
  deleteTask,
  updateTask,
  changetask,
  submitUpdate,
  submitSearch
};

export default connect(null, mapDispatchToProps)(Tasks);
