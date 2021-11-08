import { Link } from 'react-router-dom';
import s from './MovieList.module.css';
import defaultPoster from '../../defaultImages/no_image_poster.jpg';

export default function MovieList({ movies, location, url }) {
  return (
    <ul className={s.FilmList}>
      {movies &&
        movies.map(
          movie =>
            movie.title && (
              <li className={s.FilmList__item} key={movie.id}>
                <Link
                  to={{
                    pathname: `${url}/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    className={s.FilmList__images}
                    src={
                      movie.poster_path
                        ? `https://www.themoviedb.org/t/p/w300${movie.poster_path}`
                        : defaultPoster
                    }
                    alt={movie.title}
                  />
                  <h4 className={s.FilmList__title}>{movie.title}</h4>
                </Link>
              </li>
            ),
        )}
    </ul>
  );
}
