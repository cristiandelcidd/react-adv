import { CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks";
import { Provider } from "../context/ProductContext";
import { Product } from "../interfaces";

import styles from "../styles/styles.module.css";
import { OnChangeArgs } from "../interfaces/index";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}

const ProductCard = ({
  children,
  product,
  className = "",
  style,
  onChange,
  value,
}: Props) => {
  const { counter, handleIncrementOrDecrement } = useProduct({
    onChange,
    product,
    value,
  });

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
