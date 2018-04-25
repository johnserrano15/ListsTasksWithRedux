import React, { Component } from 'react';
import MoviesLayout from '../components/movies-layout';
import ListMovies from '../components/listMovies';
import api from '../../api/index';
import { connect } from 'react-redux';
import { like, unlike, searchMovies } from '../../actions/index';

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
    // console.log(movies);
    if (movies != this.state.movies) {
      this.setState({
        movies
      });
    }
  }

  handlerClickLike = (id, like, unlike) => {
    // this.props.dispatch({
    //   type: 'LIKE',
    //   payload: {
    //     id,
    //     like,
    //     unlike
    //   }
    // });
    this.props.like(id, like, unlike);
  };

  handlerClickUnlike = (id, like, unlike) => {
    // this.props.dispatch({
    //   type: 'UNLIKE',
    //   payload: {
    //     id,
    //     unlike,
    //     like
    //   }
    // });
    this.props.unlike(id, unlike, like);
  };

  handlerSubmitSearch = event => {
    event.preventDefault();
    // console.info(this.input.value);
    // this.props.dispatch({
    //   type: 'SEARCH',
    //   payload: {
    //     value: this.input.value
    //   }
    // });
    this.props.searchMovies(this.input.value);

    this.input.value = '';
  };

  setRef = element => {
    this.input = element;
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
  searchMovies
};

export default connect(null, mapDispatchToProps)(Movies);
