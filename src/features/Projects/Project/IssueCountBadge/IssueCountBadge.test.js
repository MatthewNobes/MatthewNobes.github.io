import { render, screen } from "@testing-library/react";
import { IssueCountBadge } from "./IssueCountBadge";

test("the issue count badge is present with the correct text and number when passed 4 issues", () => {
  render(<IssueCountBadge issueCount={4} />);
  const issueCountBadgeText = screen.getByText(/4 Open Issues/i);
  expect(issueCountBadgeText).toBeInTheDocument();
});

test("the issue count badge is present when provided with zero issues", () => {
  render(<IssueCountBadge issueCount={0} />);
  const issueCountBadgeText = screen.queryByText(/0 Open Issues/i);
  expect(issueCountBadgeText).toBeNull();
});
