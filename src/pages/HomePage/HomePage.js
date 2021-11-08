import { useState, useEffect } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import * as filmAPI from '../../services/Api';
import MovieList from '../../components/MovieList/MovieList';
import s from '../MovieDetailsPage/MovieDetailsPage.module.css';

export default function HomePage() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const [films, setFilms] = useState(null);

  useEffect(() => {
    filmAPI.fetchTrending().then(res => setFilms(res.results));
  }, []);

  return (
    <>
      <h1 className={s.Card__title}>Popular movies</h1>
      <MovieList movies={films} url={`${url}movies`} location={location} />;
    </>
  );
}
