import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import * as filmAPI from '../../services/Api';
import MovieList from '../../components/MovieList/MovieList';
import Searchbar from '../../components/SearchBar/SearchBar';

export default function MoviesPage() {
  const [movieSearch, setMovieSearch] = useState('');
  const location = useLocation();
  const history = useHistory();

  const searchQuery = new URLSearchParams(location.search).get('query');
  console.log('searchQuery', searchQuery);

  const handleFormSubmit = name => {
    name && history.push({ ...location, search: '' });
  };

  useEffect(() => {
    searchQuery &&
      filmAPI.fetcnOnSearch(searchQuery).then(res => {
        setMovieSearch(res.results);
        res.results.length === 0 && history.push({ ...location, search: '' });
      });
  }, [searchQuery, history, location]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <MovieList movies={movieSearch} url={`movies`} location={location} />
    </>
  );
}
