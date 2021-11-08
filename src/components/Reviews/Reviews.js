import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as filmAPI from '../../services/Api';
import s from '../Reviews/Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    if (!filmId) {
      return;
    }
    filmAPI.fetchMovieReviews(filmId).then(res => setReviews(res.results));
  }, [filmId]);

  return (
    <>
      {reviews && reviews.length !== 0 ? (
        <ul className={s.ReviewsList}>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h4 className={s.ReviewsList__title}>
                  Author: {review.author}
                </h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </>
  );
}
