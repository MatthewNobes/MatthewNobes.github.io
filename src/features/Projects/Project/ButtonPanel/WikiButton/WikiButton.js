import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export const WikiButton = (props) => {
	const link = props.wikiLink;

	if (link) {
		return (
			<Button variant="outline-primary" href={link}>
				View Wiki
			</Button>
		);
	}
};

WikiButton.propTypes = {
	wikiLink: PropTypes.string.isRequired,
};
