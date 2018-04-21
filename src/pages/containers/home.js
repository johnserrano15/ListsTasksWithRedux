import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Tasks from '../../tasks/containers/tasks';
import HandleError from '../../error/containers/errores';
import Posts from './posts';
import { connect } from 'react-redux';
import Search from '../components/search';

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
        <HomeLayout>
          <Tasks
            name={this.props.name}
            items={this.props.items}
            shouldHide={this.props.shouldHide}
            value={this.props.value}
          />
          <Search search={this.props.search} />
        </HomeLayout>
        <Posts />
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
