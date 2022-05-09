import { CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks";
import { Provider } from "../context/ProductContext";
import { Product } from "../interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

const ProductCard = ({ children, product, className = "", style }: Props) => {
  const { counter, handleIncrementOrDecrement } = useProduct();

  return (
    <Provider
      value={{
        counter,
        handleIncrementOrDecrement,
        product,
        styles,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
