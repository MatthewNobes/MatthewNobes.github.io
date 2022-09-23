import Button from "react-bootstrap/Button";

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
