import { ProductCard } from "../components";

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
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ShoppingPage;
