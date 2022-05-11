import { useEffect, useState, useRef } from "react";

import { Product, OnChangeArgs, InitialValues } from "../interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const handleIncrementOrDecrement = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      if (newValue > initialValues.maxCount) return;
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;

    initialValues?.count ? setCounter(initialValues.count) : setCounter(value);
  }, [initialValues?.count, value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const reset = () => setCounter(initialValues?.count || value);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,

    handleIncrementOrDecrement,
    reset,
  };
};

export default useProduct;
