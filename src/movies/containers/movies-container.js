import React, { Component } from 'react';
import MoviesLayout from '../components/movies-layout';
import ListMovies from '../components/listMovies';
import api from '../../api/index';
import { connect } from 'react-redux';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    const movies = await this.props.data;
    // console.log(movies);
    this.setState({ movies });
  }

  async componentWillReceiveProps(nextProps) {
    // console.info(nextProps);
    const movies = await nextProps.data;
    if (movies != this.state.movies) {
      this.setState({
        movies
      });
    }
  }

  handlerClickLike = (id, like, unlike) => {
    this.props.dispatch({
      type: 'LIKE',
      payload: {
        id,
        like,
        unlike
      }
    });
  };

  handlerClickUnlike = (id, unlike, like) => {
    this.props.dispatch({
      type: 'UNLIKE',
      payload: {
        id,
        unlike,
        like
      }
    });
  };

  render() {
    return (
      <MoviesLayout>
        <h3 style={{ textAlign: 'center' }}>List of movies</h3>
        <ListMovies
          movies={this.state.movies}
          likesCount={this.props.likesCount}
          handlerClickLike={this.handlerClickLike}
          handlerClickUnlike={this.handlerClickUnlike}
        />
      </MoviesLayout>
    );
  }
}

export default connect()(Movies);
