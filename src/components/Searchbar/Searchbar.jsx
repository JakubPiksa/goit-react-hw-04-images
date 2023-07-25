import React, { useState } from 'react';
import css from "./searchbar.module.css"


const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <header className={css.searchBar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchButton}>
          <span>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Delve into the ethereal tapestry of visual wonders"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;