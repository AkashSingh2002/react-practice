import React, { useEffect, useState } from "react";

function DigitalClock() {

    const [time, setTime] = useState(null)

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const hour = time?.getHours();
    const minute = time?.getMinutes();
    const second = time?.getSeconds();

  return (
    <>
      <div className="digital-clock">
        <div className="digi-clock-container">
          <div className="time hour">{hour}</div>
          <div className="time minute">{minute}</div>
          <div className="time second">{second}</div>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
