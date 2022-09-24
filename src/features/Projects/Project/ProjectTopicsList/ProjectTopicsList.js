import Topic from "./Topic";
import css from "./ProjectTopicList.module.css";
import PropTypes from "prop-types";

export const ProjectTopicsList = (props) => {
	const topicsArray = props.topics;

	if (topicsArray) {
		return (
			<div className={css.TopicList}>
				{topicsArray.map((topic) => {
					return <Topic key={topic} topic={topic} />;
				})}
			</div>
		);
	} else {
		return null;
	}
};

ProjectTopicsList.propTypes = {
	topics: PropTypes.array.isRequired,
};
