import { useProduct } from "../hooks";

import styles from "../styles/styles.module.css";

import { Provider } from "../context/ProductContext";
import { ProductCardProps } from "../interfaces";

const ProductCard = ({ children, product }: ProductCardProps) => {
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
      <div className={styles.productCard}>{children}</div>;
    </Provider>
  );
};

export default ProductCard;
