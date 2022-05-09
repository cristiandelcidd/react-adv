import { useContext, CSSProperties } from "react";

import { ProductContext } from "../context/ProductContext";

export interface Props {
  className?: string;
  style?: CSSProperties;
  buttonsStyle?: CSSProperties;
}

const ProductButtons = ({ className, style, buttonsStyle }: Props) => {
  const { handleIncrementOrDecrement, counter, styles } =
    useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        style={buttonsStyle}
        onClick={() => handleIncrementOrDecrement(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={styles.buttonAdd}
        style={buttonsStyle}
        onClick={() => handleIncrementOrDecrement(+1)}
      >
        +
      </button>
    </div>
  );
};

export default ProductButtons;
