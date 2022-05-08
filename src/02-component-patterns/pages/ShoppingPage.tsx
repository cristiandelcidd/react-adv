import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import { Product } from "../interfaces";

const product: Product = {
  id: "1",
  title: "Cup of coffee",
  img: "./src/coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
