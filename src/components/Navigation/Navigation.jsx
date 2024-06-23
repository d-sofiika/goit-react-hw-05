import { NavLink} from "react-router-dom";
import css from "./navigation.module.css"
import { GiFilmProjector } from "react-icons/gi";
const Navigation = () => {
  return (
    <div className={css.boxNavigation}>
      <div><p ><GiFilmProjector className={css.icon} /></p></div>
      <nav className={css.navigation}>
       
      <NavLink to="/" className={css.buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.buildLinkClass}>
          Movies
        </NavLink>
        
      </nav></div>
  )
}

export default Navigation