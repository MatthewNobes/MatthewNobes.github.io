import { getIDFromName } from "../getIDFromName/getIDFromName";
import ResourceCard from "../ResourceCard";

const ResourceCategoryContent = (props) => {
  const childItems = props.childItems;

  if (childItems.length === 0) {
    return <p>No items in this category yet</p>;
  } else {
    childItems.map((resource) => {
      return <ResourceCard resource={resource} />;
    });
  }
};

export const ResourceCategory = (props) => {
  const header = props.resourceObject.name;
  const childItems = props.resourceObject.children;
  const categoryID = getIDFromName(props.resourceObject.name);

  return (
    <div id={categoryID}>
      <h2>{header}</h2>
      <ResourceCategoryContent childItems={childItems} />
    </div>
  );
};
