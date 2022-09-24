import { Accordion, ListGroup } from "react-bootstrap";
import ResourceData from "../Resources.json";
import ResourceCategory from "../ResourceCategory";
import { getIDFromName } from "../getIDFromName/getIDFromName";
import PropTypes from "prop-types";

const ResourceListContent = (props) => {
	const resourceGrandParentGroup = props.resourceGrandParentGroup;

	if (resourceGrandParentGroup.children.length === 0) {
		return <p>No items in this collection yet</p>;
	} else {
		return (
			<ListGroup>
				{resourceGrandParentGroup.children.map((resourceParentGroup) => {
					return (
						<ResourceCategory
							key={resourceParentGroup.name}
							resourceObject={resourceParentGroup}
						/>
					);
				})}
			</ListGroup>
		);
	}
};

ResourceListContent.propTypes = {
	resourceGrandParentGroup: PropTypes.object.isRequired,
};

export const ResourceList = () => {
	return (
		<Accordion defaultActiveKey="0">
			{ResourceData.map((resourceGrandParentGroup) => {
				const accordionItemID = getIDFromName(resourceGrandParentGroup.name);
				return (
					<Accordion.Item
						eventKey={accordionItemID}
						id={accordionItemID}
						key={accordionItemID}
					>
						<Accordion.Header>{resourceGrandParentGroup.name}</Accordion.Header>
						<Accordion.Body>
							<ResourceListContent
								resourceGrandParentGroup={resourceGrandParentGroup}
							/>
						</Accordion.Body>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
};
