import React from 'react';
import './home.sass';

const PostLayout = props => (
  <section className="post">
    {props.children}
  </section>
)

export default PostLayout;
