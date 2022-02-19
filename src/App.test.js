import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/My technical test in Fusion Talent/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders table", () => {
  render(<App />);
  const tableElement = screen.getByRole("table");
  expect(tableElement).toBeInTheDocument();
});
test("renders no found message", () => {
  render(<App />);
  const input = screen.getByLabelText("search-input");
  fireEvent.change(input, { target: { value: "23222222" } });
  const button = screen.getByLabelText("search-button");
  fireEvent.click(button);
  const notFoundMessage = screen.getByText(
    /your search did not match any result/i
  );
  expect(notFoundMessage).toBeInTheDocument();
});
