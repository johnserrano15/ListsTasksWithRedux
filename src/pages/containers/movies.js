import React, { Component } from 'react';
import MoviesLayout from '../components/movies-layout';
import HandleError from '../../error/containers/errores';
import { connect } from 'react-redux';
import MoviesContainer from '../../movies/containers/movies-container';

class Movies extends Component {
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
        <MoviesLayout>
          <MoviesContainer
            data={this.props.data}
            likesCount={this.props.likesCount}
          />
        </MoviesLayout>
      </HandleError>
    );
  }
}

function mapStateToProps(state, props) {
  console.log(state); // toma el nombre del reducer.
  return {
    data: state.dataMovies,
    likesCount: state.likesCount
  };
}

export default connect(mapStateToProps)(Movies);
