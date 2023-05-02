import { CurrencyRow } from './CurrencyRow';
import { useState, useEffect } from 'react';

const url = 'https://api.exchangerate.host/latest';

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Currency Converter</h1>
        <CurrencyRow currencyOptions={currencyOptions} />
        <div className="equals">=</div>
        <CurrencyRow currencyOptions={currencyOptions} />
      </div>
    </div>
  );
}

export default App;
