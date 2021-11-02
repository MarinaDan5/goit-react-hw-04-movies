import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as filmAPI from '../../services/Api';

export default function FilmDetailsView() {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    filmAPI.fetchMovieDetail(filmId).then(setFilm);
  }, [filmId]);

  return (
    <>
      {film && (
        <>
          <img src={film.poster_path} alt={film.title} />
          <h2>{film.title}</h2>
          <p> {film.vote_average}</p>
          <p>{film.overview}</p>
          <p>
            {film.genres
              ? film.genres.map(i => i.name).join(' ')
              : 'unknown genre'}
          </p>
        </>
      )}
    </>
  );
}
