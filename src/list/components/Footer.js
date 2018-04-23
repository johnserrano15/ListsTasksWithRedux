import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = ({ visibilityFilter }) => (
  // {/* Con el { ' ' } dejamos un espacio al lado. */}
  <p>
    Show:{' '}
    <FilterLink filter="SHOW_ALL" visibilityFilter={visibilityFilter}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE" visibilityFilter={visibilityFilter}>
      Activate
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED" visibilityFilter={visibilityFilter}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
