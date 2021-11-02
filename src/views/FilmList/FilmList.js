import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as filmAPI from '../../services/Api';
// import PageHeading from '../Navigations/Navigations';

export default function FilmView() {
  //   const { url } = useRouteMatch();

  const [films, setFilms] = useState(null);

  useEffect(() => {
    filmAPI.fetchTrending().then(res => setFilms(res.results));
  }, []);

  return (
    <>
      {films &&
        films.map(
          film =>
            film.title && (
              <li key={film.id}>
                <Link to={`/${film.id}`}>{film.title} </Link>
              </li>
            ),
        )}
    </>
  );
}
