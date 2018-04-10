import React, { Component } from 'react';
import RegularError from '../components/regular-error';

class HandleError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    })
  }

  render() {
    if (this.state.handleError) {
      return (
        <RegularError />
      )
    }

    return this.props.children;
  }
}

export default HandleError;
