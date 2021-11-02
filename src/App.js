import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navigations from './views/Navigations/Navigations';
import FilList from './views/FilmList/FilmList';
import Movie from './views/MoviesPage/MoviesPage';
import DetailsView from './views/DetailsView/DetailsView';

export default function App() {
  return (
    <div className="App">
      <Navigations />
      <Switch>
        <Route path="/" exact>
          <FilList />
        </Route>
        <Route path="/:filmId">
          <DetailsView />
        </Route>

        <Route path="/movies" exact>
          <Movie />
        </Route>
        <Route path="/movies/:filmId"></Route>
      </Switch>
    </div>
  );
}
