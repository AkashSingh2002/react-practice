// src/Clock.js

import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  const numbers = [...Array(12).keys()].map(i => i + 1);

  return (
    <div className="clock">
      <div className="clock-face">
        {numbers.map(num => {
          const angle = (num * 30) - 90;
          const style = {
            transform: `rotate(${angle}deg) translate(90px)`
          };
          return (
            <div key={num} className="clock-number" style={style}>
              {num}
            </div>
          );
        })}
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondDeg}deg)` }}
        ></div>
      </div>
    </div>
  );
};

export { Clock };
