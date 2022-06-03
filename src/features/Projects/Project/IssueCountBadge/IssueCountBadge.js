import { Badge, Tooltip, OverlayTrigger } from "react-bootstrap";
import css from "./IssueCountBadge.module.css";

export const IssueCountBadge = (props) => {
  const issueCount = props.issueCount;

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip>This project has {issueCount} outstanding issues</Tooltip>
      }
    >
      {({ ref, ...triggerHandler }) => (
        <Badge
          ref={ref}
          {...triggerHandler}
          bg="success"
          className={css.IssueCountBadge}
        >
          {issueCount} Open Issues
        </Badge>
      )}
    </OverlayTrigger>
  );
};
