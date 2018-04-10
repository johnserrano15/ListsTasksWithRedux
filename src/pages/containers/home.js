import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Tasks from '../../tasks/containers/tasks';
import HandleError from '../../error/containers/errores';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Tasks name={this.props.name}/>
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;