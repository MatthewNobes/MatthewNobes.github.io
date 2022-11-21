import PropTypes from "prop-types";

export const PageTitle = (props) => (
	<h1 className="PageTitle">{props.titleText}</h1>
);

PageTitle.propTypes = {
	titleText: PropTypes.string.isRequired,
};
