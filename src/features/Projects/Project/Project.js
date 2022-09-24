import LanguageBadge from "./LanguageBadge";
import css from "./Project.module.css";
import ButtonPanel from "./ButtonPanel";
import IssueCountBadge from "./IssueCountBadge";
import LicenseBadge from "./LicenseBadge";
import ProjectTopicsList from "./ProjectTopicsList";
import PropTypes from "prop-types";

export const Project = (props) => {
	return (
		<div key={props.id} className={css.Project}>
			<h2>{props.projectName}</h2>
			<LanguageBadge language={props.primaryLanguage} />
			<IssueCountBadge
				issueCount={props.issueCount}
				repoLink={props.repoLink}
			/>
			<LicenseBadge license={props.license} />

			<p>{props.description}</p>
			<ProjectTopicsList topics={props.topics} />
			<ButtonPanel pagesLink={props.pagesLink} repoLink={props.repoLink} />
		</div>
	);
};

Project.propTypes = {
	id: PropTypes.string.isRequired,
	projectName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	primaryLanguage: PropTypes.string.isRequired,
	issueCount: PropTypes.string.isRequired,
	repoLink: PropTypes.string.isRequired,
	license: PropTypes.string.isRequired,
	topics: PropTypes.string.isRequired,
	pagesLink: PropTypes.string.isRequired,
};
