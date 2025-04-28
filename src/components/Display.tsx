const EMPTY = 0;

const Display = () => {
  return (
    <div className="display">
      <label>
        <span>Peso:</span>
        <input type="number" min="0" placeholder="0,000" value={EMPTY} />
      </label>
      <label>
        <span>Precio:</span>
        <input
          type="number"
          placeholder="0,000"
          readOnly
          disabled
          value={EMPTY}
        />
      </label>
      <label>
        <span>Total:</span>
        <input type="number" placeholder="0,000" disabled />
      </label>
    </div>
  );
};

export default Display;
