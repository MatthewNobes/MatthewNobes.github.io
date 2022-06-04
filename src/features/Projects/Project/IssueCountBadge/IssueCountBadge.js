import { Badge, Tooltip, OverlayTrigger } from "react-bootstrap";
import css from "./IssueCountBadge.module.css";

export const IssueCountBadge = (props) => {
  const issueCount = props.issueCount;
  const issuePageURL = props.repoLink + "/issues/";

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip>Click to view issues</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Badge
          ref={ref}
          {...triggerHandler}
          bg="success"
          onClick={() => window.open(issuePageURL, "_blank")}
          href={issuePageURL}
          target="_blank"
          className={css.IssueCountBadge}
        >
          {issueCount} Open Issues
        </Badge>
      )}
    </OverlayTrigger>
  );
};
