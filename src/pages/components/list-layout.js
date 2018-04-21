import React from 'react';
import './list.sass';

function ListLayout(props) {
  return <section className="ListLayout">{props.children}</section>;
}

export default ListLayout;
