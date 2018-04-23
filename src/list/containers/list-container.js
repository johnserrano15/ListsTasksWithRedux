import React, { Component } from 'react';

import ListLayout from '../components/list-layout';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../../actions/index';

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  onAddClick = () => {
    // console.log(`text -> ${this.input.value}`);
    this.props.addTodo(this.input.value);
    this.input.value = '';
  };

  setInput = element => {
    this.input = element;
  };

  onTodoClick = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <ListLayout>
        <AddTodo setRef={this.setInput} onAddClick={this.onAddClick} />
        <TodoList todos={this.props.data} onTodoClick={this.onTodoClick} />
        <Footer />
      </ListLayout>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
  toggleTodo
};

export default connect(null, mapDispatchToProps)(ListContainer);
