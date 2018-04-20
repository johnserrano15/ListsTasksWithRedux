import React from 'react';

function Search(props) {
  const { handleSearch, setRef, handleChange, value } = props;
  return (
    <section id="search">
      <h3>Buscador</h3>
      <form action="" onSubmit={handleSearch}>
        <input
          ref={setRef}
          type="text"
          name="searchtask"
          onChange={handleChange}
          value={value}
        />
        <input type="submit" id="submitSearch" value="Search" />
      </form>
    </section>
  );
}

export default Search;
