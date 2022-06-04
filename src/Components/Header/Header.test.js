import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("the header has the name Matthew Nobes on it", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Matthew Nobes/i);
  expect(linkElement).toBeInTheDocument();
});
