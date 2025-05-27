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
  const user = userEvent.setup()

  render(<App />)

  const weightInput = screen.getByLabelText('Peso:')
  const calculateButton = screen.getByText('Calcular')
  const bananaButton = screen.getByLabelText('Plátano')
  const sidebar = screen.getByRole('complementary')

  await user.click(bananaButton)
  await user.type(weightInput, '2')
  await user.click(calculateButton)

  expect(sidebar).toHaveTextContent('3.38 €')
})

it('should show the list with name for each weighed product in the sidebar', async () => {
  const user = userEvent.setup()

  render(<App />)

  const weightInput = screen.getByLabelText('Peso:')
  const bananaButton = screen.getByLabelText('Plátano')
  const calculateButton = screen.getByText('Calcular')
  const watermelonButton = screen.getByLabelText('Sandía')
  const sidebar = screen.getByRole('complementary')

  await user.type(weightInput, '2')
  await user.click(bananaButton)
  await user.click(bananaButton)
  await user.click(calculateButton)
  await user.clear(weightInput)
  await user.type(weightInput, '4')
  await user.click(watermelonButton)
  await user.click(calculateButton)

  expect(sidebar).toHaveTextContent('Plátano - 3.38 €')
  expect(sidebar).toHaveTextContent('Sandía - 3.72 €')
})

it('should display the total price of all the weighed products', async () => {
  const user = userEvent.setup()

  render(<App />)

  const weightInput = screen.getByLabelText('Peso:')
  const bananaButton = screen.getByLabelText('Plátano')
  const calculateButton = screen.getByText('Calcular')
  const watermelonButton = screen.getByLabelText('Sandía')
  const sidebar = screen.getByRole('complementary')

  await user.type(weightInput, '2')
  await user.click(bananaButton)
  await user.click(bananaButton)
  await user.click(calculateButton)
  await user.clear(weightInput)
  await user.type(weightInput, '4')
  await user.click(watermelonButton)
  await user.click(calculateButton)

  expect(sidebar).toHaveTextContent('Total - 7.1 €')
})
