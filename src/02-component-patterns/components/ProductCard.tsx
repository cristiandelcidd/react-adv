import { CSSProperties } from "react";

import { useProduct } from "../hooks";
import { Provider } from "../context/ProductContext";
import {
  InitialValues,
  Product,
  OnChangeArgs,
  ProductCardHandlers,
} from "../interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
  initialValues?: InitialValues;
}

const ProductCard = ({
  children,
  product,
  className = "",
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    handleIncrementOrDecrement,
    maxCount,
    reset,
    isMaxCountReached,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        handleIncrementOrDecrement,
        product,
        maxCount,
        styles,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          product,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          handleIncrementOrDecrement,
          reset,
        })}
      </div>
    </Provider>
  );
};

export default ProductCard;
