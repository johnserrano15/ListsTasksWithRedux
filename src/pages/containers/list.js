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
          <ListContainer data={this.props.data} filter={this.props.filter} />
        </ListLayout>
      </HandleError>
    );
  }
}

function mapStateToProps(state, props) {
  // console.log(state); // toma el nombre del reducer.
  return {
    data: state.list,
    filter: state.listFilter
  };
}

export default connect(mapStateToProps)(List);
