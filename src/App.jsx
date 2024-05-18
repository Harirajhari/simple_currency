import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [usd, setUsd] = useState('');
  const [inr, setInr] = useState('');

  const handleConvert = () => {
    const conversionRate = 83.30;
    setInr((usd * conversionRate).toFixed(2));
  };

  return (
    <div className="converter-container">
      <h1>USD to INR Converter</h1>
      <div className="input-container">
        <label htmlFor="usd">USD:</label>
        <input
          type="number"
          id="usd"
          value={usd}
          onChange={(e) => setUsd(e.target.value)}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
      {inr && (
        <div className="result">
          <h2>INR: {inr}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
