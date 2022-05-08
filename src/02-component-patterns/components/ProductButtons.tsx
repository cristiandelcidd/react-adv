import { FC, useContext } from "react";

import { ProductContext } from "../context/ProductContext";

const ProductButtons = () => {
  const { handleIncrementOrDecrement, counter, styles } =
    useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncrementOrDecrement(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={styles.buttonAdd}
        onClick={() => handleIncrementOrDecrement(+1)}
      >
        +
      </button>
    </div>
  );
};

export default ProductButtons;
