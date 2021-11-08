import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navigations from './components/Navigations/Navigations';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /*webpackChunkName: "HomePage"*/),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage' /*webpackChunkName: "MoviesPage"*/),
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDeatailsPage' /*webpackChunkName: "MovieDetailsPage"*/),
);

export default function App() {
  return (
    <div className="App">
      <Navigations />
      <Suspense fallback={<Loader />}>
        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:filmId">
            <MovieDetailsPage />
          </Route>

          <Route path="*">
            <div>404 Page not found</div>
          </Route>

        </Switch>
      </Suspense>
    </div>
  );
}
