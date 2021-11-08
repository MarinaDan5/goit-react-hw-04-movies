import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import * as filmAPI from '../../services/Api';
import s from './Cast.module.css';
import defaultImage from '../../defaultImages/no_foto_image.jpg';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    filmAPI.fetchMovieCredits(filmId).then(response => setCast(response.cast));
  }, [filmId]);

  return cast ? (
    <ul className={s.Cast_list}>
      {cast.map(actor => {
        return (
          <li className={s.Cast_list__item} key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : defaultImage
              }
              alt={actor.name}
            />
            <p>
              Actor: {actor.name}
              <br />
              Character: {actor.character}
            </p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Cast is not available.</p>
  );
}
