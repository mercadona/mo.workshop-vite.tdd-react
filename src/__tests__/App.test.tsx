import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "../App";

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
  await userEvent.click(banana);

  const weightInput = screen.getByLabelText("Peso:");
  await userEvent.type(weightInput, "2");
  const calculateButton = screen.getByRole("button", { name: "Calcular" });
  await userEvent.click(calculateButton);

  const total = screen.getByLabelText("Total:");
  expect(total).toHaveValue("3.38");
});
