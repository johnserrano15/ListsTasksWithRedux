import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Tasks from '../../tasks/containers/tasks';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  render() {
    return (
      <HomeLayout>
        <Tasks name={this.props.name}/>
      </HomeLayout>
    )
  }
}

export default Home;