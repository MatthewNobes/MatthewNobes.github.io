import Button from "react-bootstrap/Button";
import LanguageBadge from "./LanguageBadge";
import css from "./Project.module.css";

export const Project = (props) => {
  return (
    <div key={props.id} className={css.Project}>
      <h2 className={css.ProjectTitle}>{props.projectName}</h2>
      <LanguageBadge className={css.Badge} language={props.primaryLanguage} />
      <p className="Main-Paragraph">{props.description}</p>

      <Button
        className={css.ProjectExternalLinks}
        id={css.git}
        href={props.repoLink}
        target="_blank"
      >
        View on GitHub
      </Button>
      <Button
        className={css.ProjectExternalLinks}
        href={"https://matthewnobes.github.io/" + props.pagesLink}
      >
        Try it out!
      </Button>
    </div>
  );
};
