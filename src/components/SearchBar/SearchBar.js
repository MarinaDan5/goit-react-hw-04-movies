import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import s from './SearchBar.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [imageSearch, setImageSearch] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleNameChange = event => {
    setImageSearch(event.currentTarget.value.toLowerCase());
  };

  const hendleSubmit = event => {
    event.preventDefault();

    if (imageSearch.trim() === '') {
      toast('Введите Ваш запрос');
      return;
    }
    onSubmit(imageSearch);
    setImageSearch('');
    history.push({ ...location, search: `query=${imageSearch}` });
  };

  return (
    <div className={s.Searchbar}>
      <form onSubmit={hendleSubmit} className={s.SearchForm}>
        <button
          type="submit"
          className={s.SearchForm__button}
          onClick={hendleSubmit}
        >
          <span className={s.SearchForm__button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          name="imageSearch"
          value={imageSearch}
          onChange={handleNameChange}
        />
      </form>
      <ToastContainer />
    </div>
  );
}
