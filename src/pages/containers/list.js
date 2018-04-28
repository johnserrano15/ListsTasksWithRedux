import React, { Component } from 'react';
import ListLayout from '../components/list-layout';
import HandleError from '../../error/containers/errores';
import { connect } from 'react-redux';
import ListContainer from '../../list/containers/list-container';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  render() {
    // console.log(this.props.items);
    return (
      <HandleError>
        <ListLayout>
          <h3>Hola mundo</h3>
          <ListContainer data={this.props.data} />
        </ListLayout>
      </HandleError>
    );
  }
}

function mapStateToProps(state, props) {
  console.info(state);
  // console.log(state.get('list')); // toma el nombre del reducer.
  // console.log(state.get('listFilter').get('filter')); // toma el nombre del reducer.
  return {
    data: getVisibleTodos(
      state.get('list'),
      state.get('listFilter').get('filter')
    )
  };
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

export default connect(mapStateToProps)(List);
