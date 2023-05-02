import { CurrencyRow } from './CurrencyRow';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Currency Converter</h1>
        <CurrencyRow />
        <div className="equals">=</div>
        <CurrencyRow />
      </div>
    </div>
  );
}

export default App;
