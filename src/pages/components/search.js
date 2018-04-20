import React from 'react';

function Search(props) {
  const { search } = props;
  let listSearch;
  if (search != null) {
    listSearch = search.map(item => {
      return <li key={item.id}>{item.text}</li>;
    });
  }
  // console.log(listSearch);
  return <ul>{listSearch}</ul>;
}

export default Search;
