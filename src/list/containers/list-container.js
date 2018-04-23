import React, { Component } from 'react';

import ListLayout from '../components/list-layout';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  onAddClick = () => {
    console.log(`text -> ${this.input.value}`);
    this.props.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: Date.now(),
        text: this.input.value
      }
    });
    this.input.value = '';
  };

  setInput = element => {
    this.input = element;
  };

  onTodoClick = id => {
    this.props.dispatch({
      type: 'TOGGLE_TODO',
      payload: {
        id
      }
    });
    console.log('click');
  };

  render() {
    console.log(this.props.filter);
    console.log(this.props.data);
    return (
      <ListLayout>
        <AddTodo setRef={this.setInput} onAddClick={this.onAddClick} />
        <TodoList
          todos={getVisibleTodos(this.props.data, this.props.filter)}
          onTodoClick={this.onTodoClick}
        />
        <Footer />
      </ListLayout>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      // Este filter es una function propia de JavaScript
      // Entonces donde t.completed sea true
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      // Aca es lo mismo si es true lo cambia a false entonces ese no es Activate
      return todos.filter(t => !t.completed);
  }
};

export default connect()(ListContainer);
