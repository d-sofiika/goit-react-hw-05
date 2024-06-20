import { NavLink} from "react-router-dom";
import css  from "./navigation.module.css"
const Navigation = () => {
  return (
    <div><nav>
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