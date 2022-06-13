import ResourceCard from "../ResourceCard";

export const ResourceCategory = (props) => {
  const header = props.resourceObject.name;
  const childItems = props.resourceObject.children;

  return (
    <div>
      <h2>{header}</h2>
      {childItems.map((resource) => {
        return <ResourceCard resource={resource} />;
      })}
    </div>
  );
};
