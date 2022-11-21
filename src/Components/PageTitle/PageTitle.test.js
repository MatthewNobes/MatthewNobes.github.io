import { PageTitle } from "./PageTitle";
import { render, screen } from "@testing-library/react";

describe("testing the PageTitle", () => {
	it("should render the PageTitle with the correct text", () => {
		const testText = "Hello World!";
		render(<PageTitle titleText={testText} />);
		const titleComponent = screen.getByText(testText);
		expect(titleComponent).toBeInTheDocument();
	});
});
