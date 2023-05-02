export const CurrencyRow = ({ currencyOptions }) => {
  return (
    <div>
      <input type="number" className="input" />
      <select>
        {currencyOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
