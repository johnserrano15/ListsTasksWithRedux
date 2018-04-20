import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Tasks from '../../tasks/containers/tasks';
import HandleError from '../../error/containers/errores';
import Posts from './posts';
import { connect } from 'react-redux';

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
          <Tasks name={this.props.name} items={this.props.items} />
        </HomeLayout>
        <Posts />
      </HandleError>
    );
  }
}

function mapStateToProps(state, props) {
  console.log(state.items);
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(Home);
