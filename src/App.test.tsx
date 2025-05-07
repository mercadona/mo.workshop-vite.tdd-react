import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import App from "./App";
import {calculateCurrentTotal, chooseProduct, weightProduct} from "./helpers";

it("should see the scale app", () => {
  render(<App />);

  const weightInput = screen.getByLabelText("Peso:");
  const priceInput = screen.getByLabelText("Precio:");
  const totalInput = screen.getByLabelText("Total:");
  const banana = screen.getByLabelText("Plátano");
  const mango = screen.getByLabelText("Mango");
  const calculateButton = screen.getByText("Calcular");

  expect(weightInput).toBeInTheDocument();
  expect(priceInput).toBeInTheDocument();
  expect(totalInput).toBeInTheDocument();
  expect(banana).toBeInTheDocument();
  expect(mango).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();
});

it("should be able to introduce a weight", async () => {
  render(<App />);
  await chooseProduct('Plátano');
  const weightInput = screen.getByLabelText("Precio:");
  expect(weightInput).toHaveValue(1.69);
});

it("should show weighted product price", async () => {
  render(<App />);
  await chooseProduct('Plátano');

  await weightProduct('2');
  await calculateCurrentTotal();
  const total = screen.getByLabelText("Total:");
  expect(total).toHaveValue(3.38);
});
