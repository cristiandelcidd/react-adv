import { ReactElement } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  handleIncrementOrDecrement: (value: number) => void;
  styles: any;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
