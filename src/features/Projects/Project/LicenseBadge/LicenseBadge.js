import { Badge, Tooltip, OverlayTrigger } from "react-bootstrap";
import css from "./LicenseBadge.module.css";

export const LicenseBadge = (props) => {
	const license = props.license?.name;
	if (license) {
		return (
			<OverlayTrigger
				placement="bottom"
				overlay={<Tooltip>This project is under a {license}.</Tooltip>}
			>
				{({ ref, ...triggerHandler }) => (
					<Badge
						ref={ref}
						{...triggerHandler}
						bg="info"
						className={css.LicenseBadge}
					>
						{license}
					</Badge>
				)}
			</OverlayTrigger>
		);
	} else {
		return null;
	}
};
