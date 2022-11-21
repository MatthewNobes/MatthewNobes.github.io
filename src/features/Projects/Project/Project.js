import css from "./Project.module.css";
import ButtonPanel from "./ButtonPanel";
import ProjectTopicsList from "./ProjectTopicsList";
import PropTypes from "prop-types";
import BadgePanel from "./BadgePanel";

export const Project = (props) => {
	return (
		<div key={props.id} className={css.Project}>
			<h2>{props.projectName}</h2>
			<BadgePanel
				primaryLanguage={props.primaryLanguage}
				issueCount={props.issueCount}
				repoLink={props.repoLink}
				license={props.license}
			/>
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
