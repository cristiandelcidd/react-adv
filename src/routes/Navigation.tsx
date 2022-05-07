import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../favicon.svg";
import { isActive } from "../utils";
import routes from "./routes";
import Spinner from "../01-lazyload/components/Spinner";

const Navigation = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" width={50} />
            <ul>
              {routes.map(({ name, path }) => (
                <li key={name}>
                  <NavLink to={path} className={isActive}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ name, path, Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
            <Route
              path="*"
              element={<Navigate to={routes[0].path} replace />}
            />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};

export default Navigation;
