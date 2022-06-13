import { Accordion, ListGroup } from "react-bootstrap";
import ResourceData from "../Resources.json";
import ResourceCategory from "../ResourceCategory";
import { getIDFromName } from "../getIDFromName/getIDFromName";

export const ResourceList = () => {
  return (
    <Accordion defaultActiveKey="0">
      {ResourceData.map((resourceGrandParentGroup) => {
        const accordionItemID = getIDFromName(resourceGrandParentGroup.name);
        return (
          <Accordion.Item eventKey={accordionItemID} id={accordionItemID}>
            <Accordion.Header>{resourceGrandParentGroup.name}</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {resourceGrandParentGroup.children.map(
                  (resourceParentGroup) => {
                    return (
                      <ResourceCategory resourceObject={resourceParentGroup} />
                    );
                  }
                )}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
