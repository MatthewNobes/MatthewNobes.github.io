import Topic from "./Topic";
import css from "./ProjectTopicList.module.css";

export const ProjectTopicsList = (props) => {
	const topicsArray = props.topics;

	if (topicsArray) {
		return (
			<div className={css.TopicList}>
				{topicsArray.map((topic) => {
					return <Topic topic={topic} />;
				})}
			</div>
		);
	} else {
		return null;
	}
};
