import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

// const LazyPage1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));

const routes: Route[] = [
  {
    path: "lazyload",
    Component: lazy(() => import("../01-lazyload/layout/LazyLayout")),
    name: "LazyLoading Nested",
  },
  {
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy Loading",
  },
];

export default routes;
