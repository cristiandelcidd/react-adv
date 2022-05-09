import { CSSProperties, useContext } from "react";

import { ProductContext } from "../context/ProductContext";

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

const ProductTitle = ({ title = "", className = "", style }: Props) => {
  const { styles, product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};

export default ProductTitle;
