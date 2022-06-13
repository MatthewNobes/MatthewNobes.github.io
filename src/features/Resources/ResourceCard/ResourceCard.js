export const ResourceCard = (props) => {
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
