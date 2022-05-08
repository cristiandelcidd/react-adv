import { useProduct } from "../hooks";
import styles from "../styles/styles.module.css";

// import noImage from "../assets/no-image.png";

const ProductCard = () => {
  const { counter, handleIncrementOrDecrement } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        src="./src/coffee-mug.png"
        alt="Coffee Mug"
        className={styles.productImg}
      />
      {/* <img src={noImage} alt="No Image" className={styles.productImg} /> */}

      <span className={styles.productDescription}>Coffee Mug</span>

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
    </div>
  );
};

export default ProductCard;
