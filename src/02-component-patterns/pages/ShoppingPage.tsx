import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import { Product } from "../interfaces";
import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ background: "#222" }}
        >
          <ProductImage
            className="custom-image"
            style={{ borderRadius: "50%" }}
          />
          <ProductTitle className="text-bold" style={{ fontSize: "20px" }} />
          <ProductButtons
            className="custom-buttons"
            style={{ display: "flex", justifyContent: "center" }}
            buttonsStyle={{ borderRadius: "20%", fontSize: "20px" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
