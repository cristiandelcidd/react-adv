import { useEffect, useRef, useState } from "react";
import { Product, OnChangeArgs } from "../interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(value);

  const isControlled = useRef(!!onChange);

  const handleIncrementOrDecrement = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    handleIncrementOrDecrement,
  };
};

export default useProduct;
