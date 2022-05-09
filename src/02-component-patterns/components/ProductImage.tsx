import { CSSProperties, useContext } from "react";

import { ProductContext } from "../context/ProductContext";
import noImage from "../assets/no-image.jpg";

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

const ProductImage = ({ img, className, style }: Props) => {
  const { product, styles } = useContext(ProductContext);
  let image;

  img ? (image = img) : product.img ? (image = product.img) : (image = noImage);

  return (
    <img
      src={image}
      alt={product.title}
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};

export default ProductImage;
