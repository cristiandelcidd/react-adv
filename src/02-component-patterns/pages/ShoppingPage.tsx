import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";
import products from "../data/products";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        style={{ background: "#222" }}
        initialValues={{ count: 5, maxCount: 10 }}
      >
        {({
          reset,
          isMaxCountReached,
          count,
          handleIncrementOrDecrement,
          maxCount,
        }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ borderRadius: "50%" }}
            />
            <ProductTitle className="text-bold" style={{ fontSize: "20px" }} />
            <ProductButtons
              className="custom-buttons"
              buttonsStyle={{ fontSize: "20px" }}
            />

            <button onClick={reset}>Reset</button>
            <button onClick={() => handleIncrementOrDecrement(-2)}>-2</button>
            {!isMaxCountReached && (
              <button
                onClick={() => {
                  handleIncrementOrDecrement(+2);
                }}
              >
                +2
              </button>
            )}
            <div>
              <span>
                Count: {count} - Max Count: {maxCount}
                {isMaxCountReached && (
                  <p
                    style={{
                      background: "#fff",
                      textAlign: "center",
                      padding: "10px",
                      color: "#000",
                    }}
                  >
                    Max count reached!!!
                  </p>
                )}
              </span>
            </div>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
