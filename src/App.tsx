import { useState } from "react";
import products from "./products.json";
import { Product } from "./types";

const EMPTY = 0;
const NO_ERROR = false;

const App = () => {
  const [error, setError] = useState(NO_ERROR);

  return (
    <div className="app">
      <div className="display">
        <label>
          <span>Peso:</span>
          <input
            type="number"
            step="any"
            min="0"
            placeholder="0,000"
            value={EMPTY}
          />
        </label>
        <label>
          <span>Precio:</span>
          <input
            type="number"
            step="any"
            min="0"
            placeholder="0,000"
            readOnly={true}
            disabled={true}
            value={EMPTY}
          />
        </label>
        <label>
          <span>Total:</span>
          <input type="number" placeholder="0,000" disabled />
        </label>
      </div>
      <div className="controls">
        <div className="products">
          {products.map((product: Product) => {
            return (
              <button
                key={product.id}
                aria-label={product.name}
                value={product.price}
              >
                <img src={product.image} alt="" />
              </button>
            );
          })}
        </div>
        <div className="sidebar" data-testid="sidebar">
          <div>
            <button>Calcular</button>
          </div>
        </div>
      </div>
      {error && <div className="error">Error</div>}
    </div>
  );
};

export default App;
