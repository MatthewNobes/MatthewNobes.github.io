import { Accordion } from "react-bootstrap";
import ResourceData from "../Resources.json";

const Resource = (props) => {
  const resourceName = props.resource.name;
  const resourceDescription = props.resource.description;
  const resourceURL = props.resource.normalURL;

  return (
    <div>
      <h3>{resourceName}</h3>
      <div>
        <p>{resourceDescription}</p>
        <a href={resourceURL} target="_blank" rel="noreferrer">
          Link
        </a>
      </div>
    </div>
  );
};

const ResourceParentGroup = (props) => {
  const header = props.resourceObject.name;
  const childItems = props.resourceObject.children;

  return (
    <div>
      <h2>{header}</h2>
      {childItems.map((resource) => {
        return <Resource resource={resource} />;
      })}
    </div>
  );
};

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
                  <ResourceParentGroup resourceObject={resourceParentGroup} />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
