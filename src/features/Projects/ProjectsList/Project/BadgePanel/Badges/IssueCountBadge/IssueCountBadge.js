import { Badge, Tooltip, OverlayTrigger } from "react-bootstrap";
import css from "./IssueCountBadge.module.css";
import PropTypes from "prop-types";

export const IssueCountBadge = (props) => {
	const issueCount = props.issueCount;
	const issuePageURL = props.repoLink + "/issues/";

	if (issueCount) {
		return (
			<OverlayTrigger
				placement="bottom"
				overlay={<Tooltip>Click to view issues</Tooltip>}
			>
				{({ ref, ...triggerHandler }) => (
					<Badge
						ref={ref}
						{...triggerHandler}
						bg="success"
						onClick={() => window.open(issuePageURL, "_blank")}
						href={issuePageURL}
						target="_blank"
						className={css.IssueCountBadge}
					>
						{issueCount} Open Issues
					</Badge>
				)}
			</OverlayTrigger>
		);
	} else {
		return null;
	}
};

IssueCountBadge.propTypes = {
	issueCount: PropTypes.string.isRequired,
	repoLink: PropTypes.string.isRequired,
};
