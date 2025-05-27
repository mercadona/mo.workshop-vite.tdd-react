import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

it('should see the scale app', () => {
  render(<App />)

  const weightInput = screen.getByLabelText('Peso:')
  const priceInput = screen.getByLabelText('Precio:')
  const totalInput = screen.getByLabelText('Total:')
  const banana = screen.getByLabelText('Plátano')
  const mango = screen.getByLabelText('Mango')
  const calculateButton = screen.getByText('Calcular')

  expect(weightInput).toBeInTheDocument()
  expect(priceInput).toBeInTheDocument()
  expect(totalInput).toBeInTheDocument()
  expect(banana).toBeInTheDocument()
  expect(mango).toBeInTheDocument()
  expect(calculateButton).toBeInTheDocument()
})

it('should calculate the total', async () => {
  const user = userEvent.setup()

  render(<App />)

  const weightInput = screen.getByLabelText('Peso:')
  const bananaButton = screen.getByLabelText('Plátano')
  const calculateButton = screen.getByText('Calcular')
  const totalInput = screen.getByLabelText('Total:')

  await user.type(weightInput, '2')
  await user.click(bananaButton)
  await user.click(calculateButton)

  expect(totalInput).toHaveValue(3.38)
})

it('should add the last weighed price in the sidebar', async () => {
  render(<App />)

  const weightInput = screen.getByLabelText('Peso:')
  const calculateButton = screen.getByText('Calcular')
  const bananaButton = screen.getByLabelText('Plátano')
  const sidebar = screen.getByRole('complementary')

  await userEvent.click(bananaButton)
  await userEvent.type(weightInput, '2')
  await userEvent.click(calculateButton)

  expect(sidebar).toHaveTextContent('3.38 €')
})
