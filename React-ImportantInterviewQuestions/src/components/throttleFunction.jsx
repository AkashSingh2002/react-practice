import React, { useRef, useState } from "react";
import useThrottle from "./useThrottle";

let isThrottled = false; // sometimes its not recommended to place it outside so instead we can preserve the state of this variable by creating separate custom hook or useRef
// we need to do this just because of scope and rerender as it redeclare the variable after every re render

function ThrottleFunction() {
  let throttleRef = useRef(false);

  function throttle(func, delay) {
    return function (...args) {
      console.log("clickkked");
      if (!isThrottled) {
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, delay);
        func(...args);
      }
    };
  }

  function throttle3(func, delay){
    return function(...args){
        if(!throttleRef.current){
            throttleRef.current = true;
            func(args);
            setTimeout(() => throttleRef.current = false, delay)
        }
    }

  }

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const throttleIncrement = throttle(() => {
    setCount((prev) => prev + 1);
    console.log("clickedd functionn");
  }, 2000);

  const throttleIncrement2 = useThrottle(() => {
    // we can create custom hook and useRef
    setCount2((prev) => prev + 1);
    console.log("clickedd functionn");
  }, 2000);

  const throttleIncrement3 = throttle3(
    () => {
      // we can create throttle use useRef in the same component
      setCount3((prev) => prev + 1);
      console.log("clickedd functionn");
    },
    2000
  );

  return (
    <>
      <button onClick={throttleIncrement}>{count}</button>
      <button onClick={throttleIncrement2}>{count2}</button>
      <button onClick={throttleIncrement3}>{count3}</button>
    </>
  );
}

export default ThrottleFunction;
