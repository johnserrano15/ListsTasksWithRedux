import React from 'react';
import Tasks from '../../tasks/components/tasks-layout';

function HomeLayout(props) {
  return(
    <section id="homeContainer">
      <Tasks name={props.name} />
    </section>
  )
}

export default HomeLayout;
