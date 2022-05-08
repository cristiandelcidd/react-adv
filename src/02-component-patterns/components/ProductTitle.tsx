import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

const ProductTitle = ({ title = "" }) => {
  const { styles, product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};

export default ProductTitle;
