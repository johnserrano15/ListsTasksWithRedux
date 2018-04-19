import React, { Component } from 'react';
import api from '../../api/index';
import PostsLayout from '../components/posts-layout';
import Post from '../../posts/containers/post';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      posts: [],
      loading: true,
      final: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.initialFecth();
  }
  // Esto solo se ejecuta antes de que un component se desmonta de la UI
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  async initialFecth() {
    const posts = await api.posts.getList(this.state.page);
    // con esto enviamos los posts el numero de paginas y el loading
    this.setState({
      posts,
      page: this.state.page + 1,
      loading: false
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (this.state.loading) return null;

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    // const fullHeight = document.body.clientHeight;
    const fullHeight = document.documentElement.scrollHeight;
    // const fullHeight = document.documentElement.clientHeight;
    /* console.info(`scrolled ${scrolled}`)
    console.info(`viewportHeight ${viewportHeight}`)
    console.info(`fullHeight ${fullHeight}`) */
    // si es true cambio a false
    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null;
    } else if (this.state.final) {
      return null;
    }

    return this.setState({ loading: true }, async () => {
      try {
        const posts = await api.posts.getList(this.state.page);
        // console.info(posts, posts.length)
        if (posts.length == 0) {
          this.setState({
            final: true,
            loading: false
          });
        }

        this.setState({
          posts: this.state.posts.concat(posts),
          page: this.state.page + 1,
          loading: false
        });
      } catch (err) {
        console.error(err);
        this.setState({ loading: false });
      }
    });
  }

  render() {
    return (
      <PostsLayout>
        <section>
          {this.state.posts.map(post => <Post key={post.id} {...post} />)}

          {this.state.loading && <h2>loading posts...</h2>}
        </section>
      </PostsLayout>
    );
  }
}

export default Posts;
