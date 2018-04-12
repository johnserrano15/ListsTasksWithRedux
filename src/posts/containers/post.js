import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api/index';
import PostLayout from '../components/post-layout';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {},
      comments: [],
    };
  }

  async componentDidMount() {
    const [
      user,
      comments,
    ] = await Promise.all([
      api.users.getSingle(this.props.userId),
      api.posts.getComments(this.props.id),
    ]);

    this.setState({
      loading: false,
      user,
      comments,
    })
  }

  render() {
    return (
      <PostLayout 
        id={this.props.id}
        title={this.props.title}
        body={this.props.body}
        loading={this.state.loading}
        user={this.state.user}
        comments={this.state.comments}
      />
    )
  }
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Post;