import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import { useShoppingCart } from "../hooks";
import "../styles/custom-styles.css";
import products from "../data/products";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
        {/* <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            style={{ background: "#222" }}
            onChange={(event: any) => onProductCountChange(event)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{ borderRadius: "50%" }}
            />
            <ProductTitle className="text-bold" style={{ fontSize: "20px" }} />
            <ProductButtons
              className="custom-buttons"
              buttonsStyle={{ fontSize: "20px" }}
            />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.values(shoppingCart).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            style={{ background: "#222", width: "100px" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ borderRadius: "50%" }}
            />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
              buttonsStyle={{ fontSize: "20px" }}
            />
          </ProductCard>
        ))}
      </div>

      {/* <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};

export default ShoppingPage;
