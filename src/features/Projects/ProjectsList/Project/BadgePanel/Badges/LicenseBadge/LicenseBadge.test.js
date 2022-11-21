/* eslint-disable camelcase */
import { render, screen } from "@testing-library/react";
import { LicenseBadge } from "./LicenseBadge";

test("the issue count badge is present with the correct text and number when passed 4 issues", () => {
	const licenseObject = {
		key: "mit",
		name: "MIT License",
		spdx_id: "MIT",
		url: "https://api.github.com/licenses/mit",
		node_id: "MDc6TGljZW5zZTEz",
	};
	render(<LicenseBadge license={licenseObject} />);
	const licenseBadgeText = screen.getByText(/MIT License/i);
	expect(licenseBadgeText).toBeInTheDocument();
});
