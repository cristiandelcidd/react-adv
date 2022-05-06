import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import logo from "../favicon.svg";
import { isActive } from "../utils";

const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" width={50} />
          <ul>
            <li>
              <NavLink to="/lazy1" className={isActive}>
                Lazy1
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={isActive}>
                Lazy2
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={isActive}>
                Lazy3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />} />
          <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy3" element={<LazyPage3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
