import { render, screen } from "@testing-library/react";
import { LanguageBadge } from "./LanguageBadge";

describe("Language Badge testing", () => {
	it("correctly displays the language passed in", () => {
		render(<LanguageBadge language="JavaScript" />);
		const issueCountBadgeText = screen.getByText("JavaScript");
		expect(issueCountBadgeText).toBeInTheDocument();
	});
});
