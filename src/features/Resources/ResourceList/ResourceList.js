import { Accordion } from "react-bootstrap";
import ResourceData from "../Resources.json";
import ResourceCategory from "../ResourceCategory";

export const ResourceList = () => {
  return (
    <Accordion defaultActiveKey="0">
      {ResourceData.map((resourceGrandParentGroup) => {
        return (
          <Accordion.Item eventKey={resourceGrandParentGroup.name}>
            <Accordion.Header>{resourceGrandParentGroup.name}</Accordion.Header>
            <Accordion.Body>
              {resourceGrandParentGroup.children.map((resourceParentGroup) => {
                return (
                  <ResourceCategory resourceObject={resourceParentGroup} />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
