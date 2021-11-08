const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fd2fe5a9c9f68d263a72e3d7641836aa';

async function fetchWithError(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchWithError(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}

export function fetcnOnSearch(movieSearch) {
  return fetchWithError(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieSearch}`,
  );
}
export function fetchMovieDetail(movieId) {
  return fetchWithError(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}
export function fetchMovieCredits(movieId) {
  return fetchWithError(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}
export function fetchMovieReviews(movieId) {
  return fetchWithError(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
}
