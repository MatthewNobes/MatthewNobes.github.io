import Button from "react-bootstrap/Button";
import css from "./ButtonPanel.module.css";

export const ButtonPanel = (props) => {
  const repoLink = props.repoLink;
  const pagesLink = props.pagesLink;

  return (
    <div className={css.ButtonPanel}>
      <Button
        variant="outline-primary"
        id={css.git}
        href={repoLink}
        target="_blank"
      >
        View on GitHub
      </Button>
      <Button
        variant="outline-primary"
        href={"https://matthewnobes.github.io/" + pagesLink}
      >
        Try it out!
      </Button>
    </div>
  );
};
