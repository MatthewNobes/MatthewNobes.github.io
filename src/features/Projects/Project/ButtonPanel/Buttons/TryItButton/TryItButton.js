import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export const TryItButton = (props) => {
	const pagesLink = props.pagesLink;
	if (pagesLink) {
		return (
			<Button variant="outline-primary" href={pagesLink}>
				Try it out!
			</Button>
		);
	}
};

TryItButton.propTypes = {
	pagesLink: PropTypes.string.isRequired,
};
