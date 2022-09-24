import { Badge, Tooltip, OverlayTrigger } from "react-bootstrap";
import css from "./LicenseBadge.module.css";
import PropTypes from "prop-types";

export const LicenseBadge = (props) => {
	const licenseName = props.license?.name;
	if (licenseName) {
		return (
			<OverlayTrigger
				placement="bottom"
				overlay={<Tooltip>This project is under a {licenseName}.</Tooltip>}
			>
				{({ ref, ...triggerHandler }) => (
					<Badge
						ref={ref}
						{...triggerHandler}
						bg="info"
						className={css.LicenseBadge}
					>
						{licenseName}
					</Badge>
				)}
			</OverlayTrigger>
		);
	} else {
		return null;
	}
};

LicenseBadge.propTypes = {
	license: PropTypes.object.isRequired,
};
