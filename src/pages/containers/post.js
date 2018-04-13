import React, { Component } from 'react';
import HandleError from '../../error/containers/errores';
import PostLayout from '../components/post-layout';
import Post from '../../posts/containers/post';
import api from '../../api/index';
import '../components/post.sass';

class PostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postsId: 1,
      loading: true,
      posts: [],
    }
  }

  async componentDidMount() {
    const post = await api.posts.getSingle(this.state.postsId);
    // console.log(post)
    this.setState({
      posts: this.state.posts.concat(post),
      postsId: this.state.postsId + 1,
      loading: false,
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.loading) return null;

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    // const fullHeight = document.body.clientHeight;
    const fullHeight = document.documentElement.scrollHeight;
    // const fullHeight = document.documentElement.clientHeight;
    // console.log(`scrolled -> ${scrolled} viewportHeight -> ${viewportHeight} fullHeight -> ${fullHeight} }`)
    // si es true cambio a false
    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null;
    }

    return this.setState({ loading: true }, async () => {
      try {
        const post = await api.posts.getSingle(this.state.postsId);
        // console.info('pasoo')

        this.setState({
          posts: this.state.posts.concat(post),
          postsId: this.state.postsId + 1,
          loading: false,
        });
      } catch (err) {
        console.error(err);
        this.setState({ loading: false });
      }
    });
  }

  render() {
    return (
      <HandleError>
        <PostLayout>
          {
            this.state.posts.map((post, index) => {
              {/* console.log(post) */}
              return (
                <Post key={post.id} {...post} />
              )
            })
          }
          {this.state.loading && (
            <h2>loading posts...</h2>
          )}
        </PostLayout>
      </HandleError>
    )
  }
}

export default PostPage;