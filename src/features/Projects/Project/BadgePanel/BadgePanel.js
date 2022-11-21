import { LanguageBadge, IssueCountBadge, LicenseBadge } from "./Badges";
import PropTypes from "prop-types";

export const BadgePanel = (props) => {
	return (
		<div>
			<LanguageBadge language={props.primaryLanguage} />
			<IssueCountBadge
				issueCount={props.issueCount}
				repoLink={props.repoLink}
			/>
			<LicenseBadge license={props.license} />
		</div>
	);
};

BadgePanel.propTypes = {
	primaryLanguage: PropTypes.string.isRequired,
	issueCount: PropTypes.number.isRequired,
	repoLink: PropTypes.string.isRequired,
	license: PropTypes.string.isRequired,
};
