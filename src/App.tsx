import { useState } from "react";
import products from "./products.json";
import { Product } from "./types";

const App = () => {
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
    const [prices, setPrices] = useState<number[]>([]);

  const isError = false;

  return (
    <div className="app">
      <div className="display">
        <label htmlFor="weight">
          Peso:
          <input
            id="weight"
            name="weight"
            type="number"
            placeholder="0,000"
            value={weight}
            onChange={(e) => setWeight(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="price">
          Precio:
          <input
            id="price"
            type="number"
            placeholder="0,000"
            readOnly
            disabled
            value={price}
          />
        </label>
        <label htmlFor="total">
          Total:
          <input id="total" type="number" placeholder="0,000" disabled value={currentPrice}/>
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
                onClick={() => setPrice(product.price)}
              >
                <img src={product.image} alt="" />
              </button>
            );
          })}
        </div>
        <aside className="sidebar">
          <div>
            <button onClick={() => {
              setCurrentPrice(price * parseFloat(weight))
              setPrices((previousPrices) => {
                return (
                    [...previousPrices, price * parseFloat(weight)]
                )
              })
            }}>Calcular</button>
          </div>
          <ul>
            {prices.map((price: number, index: number) => {
              return (
                  <li key={index}>{price} €</li>
              )
            })}
          </ul>
          <div>
            <span>Total</span>
            <div className="viva-el-mal">{prices.reduce((accumulator, price) => {
              return accumulator + price;
            }, 0)} €</div>
          </div>
          <div>
            <button>Limpiar</button>
          </div>
        </aside>
      </div>
      {isError && <div className="error"></div>}
    </div>
  );
};

export default App;
