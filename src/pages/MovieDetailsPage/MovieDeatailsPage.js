import { useState, useEffect } from 'react';
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';

import * as filmAPI from '../../services/Api';

import ButtonBack from '../../components/ButtonBack/ButtonBack';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import defaultPoster from '../../defaultImages/no_image_poster.jpg';
import s from '../MovieDetailsPage/MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { filmId } = useParams();

  console.log('id', filmId);
  const [film, setFilm] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    filmAPI.fetchMovieDetail(filmId).then(setFilm);
  }, [filmId]);

  return (
    <>
      <h1 className={s.Card__title}> Movie details</h1>
      <ButtonBack location={location} />
      {film && (
        <>
          <div className={s.CardView}>
            <img
              className={s.CardImage}
              src={
                film.poster_path
                  ? `https://www.themoviedb.org/t/p/w300${film.poster_path}`
                  : defaultPoster
              }
              alt={film.title}
            />

            <div className={s.CardInformation}>
              <h2 className={s.Card__title}>{film.title}</h2>

              <h3 className={s.CardInformation__title}>Movie rating:</h3>
              <p className={s.CardInformation__title}> {film.vote_average}</p>
              <h3 className={s.CardInformation__title}> Description:</h3>

              <p className={s.CardInformation__title}>{film.overview}</p>
              <h3 className={s.CardInformation__title}>Genres:</h3>
              <p className={s.CardInformation__title}>
                {film.genres
                  ? film.genres.map(i => i.name).join(' ')
                  : 'unknown genre'}
              </p>
            </div>
          </div>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location },
                }}
              >
                <h4 className={s.title_link}>Cast</h4>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location },
                }}
              >
                <h4 className={s.title_link}>Reviews</h4>
              </NavLink>
            </li>
          </ul>
        </>
      )}
      <Route path="/movies/:filmId/cast/">
        <Cast filmId={filmId} />
      </Route>
      <Route path="/movies/:filmId/reviews">
        <Reviews filmId={filmId} />
      </Route>
    </>
  );
}
