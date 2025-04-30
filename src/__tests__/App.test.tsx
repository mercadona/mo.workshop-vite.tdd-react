import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import App from "../App";
import { calculatePrice, chooseProduct, weightProduct } from "./helpers";

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

it("should show the total price of weighted product", async () => {
  render(<App />);
  const banana = screen.getByLabelText("Plátano");

  await chooseProduct(banana);
  await weightProduct();
  await calculatePrice();

  const total = screen.getByLabelText("Total:");
  expect(total).toHaveValue("3.38");
});

it("should add the last weighted product in the sidebar", async () => {});

it("should show the list of weighted products with total price", async () => {});

it("should show the list of weighted products with product names", async () => {});
