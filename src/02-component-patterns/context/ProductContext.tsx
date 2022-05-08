import { createContext } from "react";

import { ProductContextProps } from "../interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export { Provider };
