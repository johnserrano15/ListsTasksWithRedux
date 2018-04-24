import React, { Component } from 'react';
import MoviesLayout from '../components/movies-layout';
import ListMovies from '../components/listMovies';
import api from '../../api/index';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    const movies = await api.movies.getMovies();
    // console.log(movies);
    this.setState({ movies: movies.Search });
  }

  render() {
    return (
      <MoviesLayout>
        <h3 style={{ textAlign: 'center' }}>List of movies</h3>
        <ListMovies movies={this.state.movies} />
      </MoviesLayout>
    );
  }
}

export default Movies;
