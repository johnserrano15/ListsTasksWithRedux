import React, { Component } from 'react';

import ListLayout from '../components/list-layout';
import AddTodo from '../components/AddTodo';

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListLayout>
        <AddTodo />
      </ListLayout>
    );
  }
}

export default ListContainer;
