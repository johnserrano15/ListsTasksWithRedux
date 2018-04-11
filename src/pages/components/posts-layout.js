import React from 'react';

function PostLayout(props) {
  return(
    <section className="postLayout">
      {props.children}
    </section>
  )
}

export default PostLayout;