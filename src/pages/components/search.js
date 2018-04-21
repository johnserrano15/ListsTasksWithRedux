import React from 'react';

function Search(props) {
  const { search } = props;
  let listSearch;
  console.log(search);
  // console.log(listSearch);
  return (
    <ul>
      {search.map(item => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
}

export default Search;
