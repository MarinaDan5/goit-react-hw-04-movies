import { NavLink } from 'react-router-dom';
import s from './Navigations.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        exact
        to="/"
        className={s.navItem}
        activeClassName={s.activNavItem}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={s.navItem}
        activeClassName={s.activNavItem}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
