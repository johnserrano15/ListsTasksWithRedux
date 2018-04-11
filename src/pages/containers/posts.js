import React, { Component } from 'react';
import api from '../../api/index';
import PostsLayout from '../components/posts-layout';

class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 1,
      posts: [],
    }
  }

  async componentDidMount() {
    const posts = await api.posts.getList(this.state.page);

    //con esto enviamos los posts el numero de paginas y el loading
    this.setState({
      posts,
      page: this.state.page + 1,
      loading: false,
    })
  }

  render(){
    return (
      <PostsLayout>
        <ul>
          {/* {this.state.posts
            .map(post => <Post key={post.id} {...post} />
            )} */}
          {
            this.state.posts.map((post) => {
              return (
                <li key={post.id}>
                  {post.title}
                </li>
              )
            })
           }
        </ul>
      </PostsLayout>
    )
  }
}

export default Post;