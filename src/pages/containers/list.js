import React, { Component } from 'react';
import ListLayout from '../components/list-layout';
import HandleError from '../../error/containers/errores';
import { connect } from 'react-redux';
import ListContainer from '../../list/containers/list-container';

class Home extends Component {
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
          <ListContainer />
        </ListLayout>
      </HandleError>
    );
  }
}

function mapStateToProps(state, props) {
  // console.log(state); // toma el nombre del reducer.
  return {
    items: state.tasks.data.items,
    shouldHide: state.tasks.data.shouldHide,
    value: state.tasks.data.value,
    search: state.search
  };
}

export default connect(mapStateToProps)(Home);
