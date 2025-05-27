import { useMemo, useState } from 'react'
import products from './products.json'
import { Product } from 'types'

interface WeightedProduct {
  name: string
  price: number
}

const validateInputs = (weight: number, price?: number) => {
  return !price || !weight
}

const App = () => {
  const [weight, setWeight] = useState('')
  const [weightedProductPrice, setWeightedProductPrice] = useState(0)
  const [weightedProducts, setWeightedProducts] = useState<WeightedProduct[]>(
    [],
  )
  const [chosenProduct, setChosenProduct] = useState<WeightedProduct | null>(
    null,
  )

  const [isError, setIsError] = useState(false)

  const totalPrice = useMemo(
    () =>
      weightedProducts.reduce(
        (acc, weightedProduct) => acc + weightedProduct.price,
        0,
      ),
    [weightedProducts],
  )

  const chooseProduct = (price: number, name: string) => {
    setChosenProduct({ price, name })
  }

  const calculateTotal = () => {
    const weightNumber = Number(weight)
    const isError = validateInputs(weightNumber, chosenProduct?.price)
    setIsError(isError)

    if (isError || !chosenProduct) return

    const totalWeightedProductPrice = chosenProduct.price * weightNumber
    setWeightedProductPrice(totalWeightedProductPrice)
    setWeightedProducts((weightedProducts) => [
      ...weightedProducts,
      { name: chosenProduct.name, price: totalWeightedProductPrice },
    ])
  }

  const clearTicket = () => {
    setWeightedProducts([])
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
            value={chosenProduct?.price}
          />
        </label>
        <label htmlFor="total">
          Total:
          <input
            id="total"
            type="number"
            placeholder="0,000"
            readOnly
            value={weightedProductPrice}
          />
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
                onClick={() => chooseProduct(product.price, product.name)}
              >
                <img src={product.image} alt="" />
              </button>
            )
          })}
        </div>
        <aside className="sidebar">
          <div>
            <button onClick={calculateTotal}>Calcular</button>
            <button onClick={clearTicket}>Limpiar</button>
          </div>
          <ul>
            {weightedProducts.map((weightedProduct) => (
              <li key={weightedProduct.name}>
                {weightedProduct.name} - {weightedProduct.price} €
              </li>
            ))}
          </ul>
          <div>Total - {totalPrice} €</div>
        </aside>
      </div>
      {isError && <div className="error">Error</div>}
    </div>
  )
}

export default App
