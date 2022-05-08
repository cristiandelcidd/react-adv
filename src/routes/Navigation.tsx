import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../favicon.svg";
import { isActive } from "../utils";
import { ShoppingPage } from "../02-component-patterns/pages";

const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" width={50} />
          <ul>
            <li>
              <NavLink to="/" className={isActive}>
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className={isActive}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="users" className={isActive}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
