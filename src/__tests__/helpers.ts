import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const chooseProduct = async (productButton: HTMLElement) => {
  await userEvent.click(productButton);
};

export const weightProduct = async () => {
  const weightInput = screen.getByLabelText("Peso:");
  await userEvent.type(weightInput, "2");
};

export const calculatePrice = async () => {
  const calculateButton = screen.getByRole("button", { name: "Calcular" });
  await userEvent.click(calculateButton);
};
