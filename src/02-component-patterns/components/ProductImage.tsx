import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";
import noImage from "../assets/no-image.jpg";

const ProductImage = ({ img = "" }) => {
  const { product, styles } = useContext(ProductContext);
  let image;

  img ? (image = img) : product.img ? (image = product.img) : (image = noImage);

  return <img src={image} alt={product.title} className={styles.productImg} />;
};

export default ProductImage;
