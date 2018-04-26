import React, { Component } from 'react';
import MoviesLayout from '../components/movies-layout';
import ListMovies from '../components/listMovies';
import api from '../../api/index';
import { connect } from 'react-redux';
import {
  like,
  unlike,
  searchMovies,
  searchMoviesAsync
} from '../../actions/index';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  /* async componentDidMount() {
    const movies = await this.props.data;
    // console.log(movies);
    this.setState({ movies });
  }

  async componentWillReceiveProps(nextProps) {
    console.info(nextProps);
    const movies = await nextProps.data;
    // console.log(movies);
    if (movies != this.state.movies) {
      this.setState({
        movies
      });
    }
  } */

  handlerClickLike = (id, like, unlike) => {
    this.props.like(id, like, unlike);
  };

  handlerClickUnlike = (id, like, unlike) => {
    this.props.unlike(id, unlike, like);
  };

  handlerSubmitSearch = event => {
    event.preventDefault();
    this.props.searchMoviesAsync(this.input.value);

    this.input.value = '';
  };

  setRef = element => {
    this.input = element;
  };

  render() {
    return (
      <MoviesLayout>
        <h3 style={{ textAlign: 'center' }}>List of movies</h3>
        {this.props.isLoading && (
          <p>Buscando movies... Buscando movies... Buscando movies...</p>
        )}
        <ListMovies
          movies={this.props.data}
          likesCount={this.props.likesCount}
          handlerClickLike={this.handlerClickLike}
          handlerClickUnlike={this.handlerClickUnlike}
        />
        <form id="buscador" onSubmit={this.handlerSubmitSearch}>
          <input
            ref={this.setRef}
            type="text"
            name="nameMovie"
            placeholder="Name movie"
          />
          <input type="submit" id="buscarMovie" value="Buscar" />
        </form>
      </MoviesLayout>
    );
  }
}

const mapDispatchToProps = {
  like,
  unlike,
  searchMovies,
  searchMoviesAsync
};

export default connect(null, mapDispatchToProps)(Movies);
