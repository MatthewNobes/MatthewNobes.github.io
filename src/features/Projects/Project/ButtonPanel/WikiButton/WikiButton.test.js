import { render, screen } from "@testing-library/react";
import { WikiButton } from "./WikiButton";

describe("WikiButton testing", () => {
	it("should render the button with the correct text", () => {
		render(<WikiButton wikiLink="google.com" />);
		const button = screen.getByText(/View Wiki/i);
		expect(button).toBeInTheDocument();
	});

	it("should render with the correct link", () => {
		const link = "google.com";
		render(<WikiButton wikiLink={link} />);
		const buttonAnchorTag = screen.getByText(/View Wiki/i).closest("a");
		expect(buttonAnchorTag).toHaveAttribute("href", link);
	});

	it("should fail to test the ci pipeline", () => {
		expect(true).tobe(false);
	});
});
