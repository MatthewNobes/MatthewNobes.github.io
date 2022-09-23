import { render, screen } from "@testing-library/react";
import { LanguageCardPane } from "./LanguageCardPane";

test("the LanguageCardPane is rendered", () => {
	render(<LanguageCardPane />);
	const card = screen.getByTestId("LanguageCardPane");
	expect(card).toBeInTheDocument();
});
