import LanguageBadge from "./LanguageBadge";
import css from "./Project.module.css";
import ButtonPanel from "./ButtonPanel";

export const Project = (props) => {
  return (
    <div key={props.id} className={css.Project}>
      <h2>{props.projectName}</h2>
      <LanguageBadge language={props.primaryLanguage} />
      <p>{props.description}</p>
      <ButtonPanel pagesLink={props.pagesLink} repoLink={props.repoLink} />
    </div>
  );
};
