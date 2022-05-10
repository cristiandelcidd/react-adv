import { Product } from "../interfaces";

const product: Product = {
  id: "1",
  title: "Cup of coffee",
  img: "./src/coffee-mug.png",
};

const product2: Product = {
  id: "2",
  title: "Coffee Mug",
  img: "./src/coffee-mug2.png",
};

const products: Product[] = [product, product2];

export default products;
