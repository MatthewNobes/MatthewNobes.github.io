import { render, screen } from "@testing-library/react";
import { TryItButton } from "./TryItButton";

describe("TryItButton testing", () => {
	it("should render the button with the correct text", () => {
		render(<TryItButton pagesLink="google.com" />);
		const button = screen.getByText(/Try it out!/i);
		expect(button).toBeInTheDocument();
	});

	it("should render with the correct link", () => {
		const link = "google.com";
		render(<TryItButton pagesLink={link} />);
		const buttonAnchorTag = screen.getByText(/Try it out!/i).closest("a");
		expect(buttonAnchorTag).toHaveAttribute("href", link);
	});
});
