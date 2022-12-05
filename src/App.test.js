import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders news app in progress", () => {
  render(<App />);
  const linkElement = screen.getByText(/news app in progress/i);
  expect(linkElement).toBeInTheDocument();
});
