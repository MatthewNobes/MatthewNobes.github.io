import { Badge } from "react-bootstrap";
import css from "./Topic.module.css";
import PropTypes from "prop-types";

export const Topic = (props) => {
	const topic = props.topic;

	return (
		<Badge pill bg="dark" className={css.Topic}>
			{topic}
		</Badge>
	);
};

Topic.propTypes = {
	topic: PropTypes.string.isRequired,
};
