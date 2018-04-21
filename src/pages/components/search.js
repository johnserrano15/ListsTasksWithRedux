import React from 'react';

function Search(props) {
  const { search } = props;
  // console.log(search);
  return (
    <ul>
      {search.map(item => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
}

export default Search;
