import { useState } from "react";


const useProduct =()=>{
    const [counter, setCounter] = useState<number>(0);

  const handleIncrementOrDecrement = (value: number) =>
    setCounter((prev) => Math.max(prev + value, 0));

    return {
        counter,
        handleIncrementOrDecrement
    }
}

export default useProduct