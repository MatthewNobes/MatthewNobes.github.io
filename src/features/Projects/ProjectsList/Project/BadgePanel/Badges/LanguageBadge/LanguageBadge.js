import { Badge, Tooltip, OverlayTrigger } from "react-bootstrap";
import PropTypes from "prop-types";

export const LanguageBadge = (props) => {
	const language = props.language;
	return (
		<OverlayTrigger
			placement="bottom"
			overlay={
				<Tooltip>This project was primarily developed in {language}</Tooltip>
			}
		>
			{({ ref, ...triggerHandler }) => (
				<Badge ref={ref} {...triggerHandler} bg="secondary">
					{language}
				</Badge>
			)}
		</OverlayTrigger>
	);
};

LanguageBadge.propTypes = {
	language: PropTypes.string.isRequired,
};
