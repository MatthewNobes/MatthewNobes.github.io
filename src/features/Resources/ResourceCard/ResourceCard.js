import css from "./ResourceCard.module.css";
import { ListGroup } from "react-bootstrap";

export const ResourceCard = (props) => {
  const resourceName = props.resource.name;
  const resourceDescription = props.resource.description;
  const resourceURL = props.resource.normalURL;
  const resourceID = props.resource.id;

  return (
    <ListGroup.Item id={resourceID}>
      <h3>{resourceName}</h3>
      <div className={css.CardContent}>
        <p>{resourceDescription}</p>
        <a
          className={css.Link}
          href={resourceURL}
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
      </div>
    </ListGroup.Item>
  );
};
