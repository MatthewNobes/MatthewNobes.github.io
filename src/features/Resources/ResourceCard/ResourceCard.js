import css from "./ResourceCard.module.css";
import { Button, ListGroup } from "react-bootstrap";

export const ResourceCard = (props) => {
  const resourceName = props.resource.name;
  const resourceDescription = props.resource.description;
  const resourceURL = props.resource.normalURL;
  const resourceArchiveURL = "https://web.archive.org/web/*/" + resourceURL;
  const resourceID = props.resource.id;

  return (
    <ListGroup.Item id={resourceID}>
      <div className={css.CardContent}>
        <div>
          <div className="me-auto">
            <div className="fw-bold">{resourceName}</div>
            {resourceDescription}
          </div>
        </div>

        <div className={css.ButtonPanel}>
          <Button
            className={css.LinkButtons}
            variant="outline-primary"
            href={resourceURL}
            target="_blank"
            rel="noreferrer"
          >
            Link
          </Button>
          <Button
            className={css.LinkButtons}
            variant="outline-secondary"
            href={resourceArchiveURL}
            target="_blank"
            rel="noreferrer"
          >
            Archive Link
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};
