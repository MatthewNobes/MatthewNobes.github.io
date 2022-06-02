import { Badge } from "react-bootstrap";

export const LanguageBadge = (props) => {
  const language = props.language;
  return <Badge bg="secondary">{language}</Badge>;
};
