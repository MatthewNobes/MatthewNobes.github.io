import { getIDFromName } from "../getIDFromName/getIDFromName";
import ResourceCard from "../ResourceCard";

export const ResourceCategory = (props) => {
  const header = props.resourceObject.name;
  const childItems = props.resourceObject.children;
  const categoryID = getIDFromName(props.resourceObject.name);

  return (
    <div id={categoryID}>
      <h2>{header}</h2>
      {childItems.map((resource) => {
        return <ResourceCard resource={resource} />;
      })}
    </div>
  );
};
