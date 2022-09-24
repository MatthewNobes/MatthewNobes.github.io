import css from "./ResourceCard.module.css";
import { Button, ListGroup } from "react-bootstrap";
import { getIDFromName } from "../getIDFromName/getIDFromName";
import PropTypes from "prop-types";

export const ResourceCard = (props) => {
	const resourceName = props.resource.name;
	const resourceDescription = props.resource.description;
	const resourceURL = props.resource.normalURL;
	const resourceArchiveURL = "https://web.archive.org/web/*/" + resourceURL;
	const resourceID = getIDFromName(props.resource.name);

	return (
		<ListGroup.Item id={resourceID}>
			<div className={css.CardContent}>
				<div>
					<div className="me-auto">
						<div className="fw-bold">{resourceName}</div>
						{resourceDescription}
					</div>
				</div>

				<div className={css.ButtonPanel}>
					<Button
						className={css.LinkButtons}
						variant="outline-primary"
						href={resourceURL}
						target="_blank"
						rel="noreferrer"
					>
						Link
					</Button>
					<Button
						className={css.LinkButtons}
						variant="outline-secondary"
						href={resourceArchiveURL}
						target="_blank"
						rel="noreferrer"
					>
						Archive Link
					</Button>
				</div>
			</div>
		</ListGroup.Item>
	);
};

ResourceCard.propTypes = {
	resource: PropTypes.object.isRequired,
};
