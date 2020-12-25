import React from 'react';

const DigitalDisplay = ({ time, timezone }) => {
  const date = new Date(time.toLocaleString('en-US', { timeZone: timezone }));
  return (
    <div style={{ marginTop: '1rem', fontSize: '2rem' }}>
      {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:
      {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:
      {date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}
    </div>
  );
};

export default DigitalDisplay;
