import React from "react";
import axios from "axios";

const Debounce = () => {
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    console.log(response.data);
  };

  const throttle = (callback, delay) => {
    let isThrottled = false;

    return (...args) => {
      if (isThrottled) {
        return;
      }

      callback(...args);
      isThrottled = true;

      setTimeout(() => (isThrottled = false), delay);
    };
  };

  const debounce = (callback, delay) => {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  // Create a debounced version of getData
  const debouncedGetData = debounce(getData, 2000);

  const throttledGetData = throttle(getData, 2000); //The difference between throttle and debounce is that debouce executes callback function when you stop typing or clicking means after 2 second wherease in throttle it exectues function immediately without any delay but the next call it exectues only after the time completes

  const handleClick = () => {
    // debouncedGetData();
    throttledGetData();
    console.log("clicked !!");
  };

  return (
    <>
      <button onClick={handleClick}>Click to hit API</button>
    </>
  );
};

export { Debounce };
