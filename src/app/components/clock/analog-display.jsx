import React from 'react';

const AnalogDisplay = ({ time, timezone, className }) => {
  let date = new Date(time.toLocaleString('en-US', { timeZone: timezone }));

  return (
    <div className={className}>
      <div className="top"></div>
      <div className="right"></div>
      <div className="bottom"></div>
      <div className="left"></div>
      <div className="center"></div>
      <div className="shadow"></div>
      <div
        className="hour"
        style={{
          transform: `rotate(${((date.getHours() / 12) * 360).toString()}deg)`,
        }}
      ></div>
      <div
        className="minute"
        style={{
          transform: `rotate(${(
            (date.getMinutes() / 60) * 360 -
            180
          ).toString()}deg)`,
        }}
      ></div>
      <div
        className="second"
        style={{
          transform: `rotate(${(
            (date.getSeconds() / 60) * 360 -
            180
          ).toString()}deg)`,
        }}
      ></div>
    </div>
  );
};

export default AnalogDisplay;
