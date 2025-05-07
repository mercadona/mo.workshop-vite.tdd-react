import userEvent from "@testing-library/user-event";
import {screen} from "@testing-library/react";

export async function chooseProduct(productName: string) {
  await userEvent.click(screen.getByLabelText(productName));
}
export async function weightProduct(kilograms: string) {
  const weight = screen.getByLabelText("Peso:");
  await userEvent.type(weight, kilograms);
}

export async function calculateCurrentTotal() {
  const calculate = screen.getByRole("button", {name: "Calcular"});
  await userEvent.click(calculate);
}