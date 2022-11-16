import Button from "react-bootstrap/Button";
import css from "./ButtonPanel.module.css";
import TryItButton from "./TryItButton";
import PropTypes from "prop-types";
import { WikiButton } from "./WikiButton/WikiButton";

export const ButtonPanel = (props) => {
	const repoLink = props.repoLink;
	const pagesLink = props.pagesLink;
	const wikiLink = props.repoLink + "/wiki";

	return (
		<div className={css.ButtonPanel}>
			<Button
				variant="outline-primary"
				id={css.git}
				href={repoLink}
				target="_blank"
			>
				View on GitHub
			</Button>
			<TryItButton pagesLink={pagesLink} />
			<WikiButton wikiLink={wikiLink} />
		</div>
	);
};

ButtonPanel.propTypes = {
	repoLink: PropTypes.string.isRequired,
	pagesLink: PropTypes.string.isRequired,
};
