import { default as ProductCardHOC } from "./ProductCard";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import ProductButtons from "./ProductButtons";

import { ProductCardHOCProps } from "../interfaces";

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export { ProductImage, ProductTitle, ProductButtons, ProductCard };
