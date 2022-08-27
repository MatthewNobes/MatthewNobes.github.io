import { render, screen } from "@testing-library/react";
import { LanguageCard } from "./LanguageCard";

test("the LanguageCard is rendered", () => {
  const testLanguage = "English";

  render(<LanguageCard language={testLanguage} />);
  const card = screen.getByTestId("LanguageCard");
  expect(card).toBeInTheDocument();
});

test("the LanguageCard loads the passed in text", () => {
  const testLanguage = "English";

  render(<LanguageCard language={testLanguage} />);
  const card = screen.getByText(testLanguage);
  expect(card).toBeInTheDocument();
});
