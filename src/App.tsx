import { useState } from 'react'
import products from './products.json'
import { Product } from 'types'

const App = () => {
  const isError = false

  const [weight, setWeight] = useState('')
  const [chosenProductPrice, setChosenProductPrice] = useState(0)
  const [total, setTotal] = useState(0)

  const chooseProduct = (price: number) => {
    setChosenProductPrice(price)
  }

  const calculateTotal = () => {
    const weightNumber = Number(weight)

    const totalPrice = chosenProductPrice * weightNumber
    setTotal(totalPrice)
  }

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
            value={chosenProductPrice}
          />
        </label>
        <label htmlFor="total">
          Total:
          <input id="total" type="number" placeholder="0,000" value={total} />
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
                onClick={() => chooseProduct(product.price)}
              >
                <img src={product.image} alt="" />
              </button>
            )
          })}
        </div>
        <aside className="sidebar">
          <div>
            <button onClick={calculateTotal}>Calcular</button>
            <button>Limpiar</button>
          </div>
          <ul>
            <li></li>
          </ul>
          <div>
            <span>Total</span>
          </div>
          <div></div>
        </aside>
      </div>
      {isError && <div className="error"></div>}
    </div>
  )
}

export default App
