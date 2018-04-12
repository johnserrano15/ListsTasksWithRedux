import React from 'react';

const PostLayout = (props) => (
  <article id={`post-${props.id}`}>
    <h2> {props.title} </h2>
    <p>
      {props.body}
    </p>

    {!props.loading && (
      <div>
        <a href={`//${props.user.website}`} target="_blank" rel="nofollow">
          {props.user.name}
        </a>
        <span>
          hay {props.comments.length} comentarios
            </span>
      </div>
    )}
  </article>
)

export default PostLayout;
