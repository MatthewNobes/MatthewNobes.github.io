import { Button } from "react-bootstrap";
import css from "./FooterContactButtons.module.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export const FooterContactButtons = () => {
  return (
    <div className={css.ButtonBlock}>
      <Button
        variant="secondary"
        className={css.ContactButton}
        href="https://www.linkedin.com/in/matthew-nobes-10b834156/"
        target="_blank"
      >
        <AiFillLinkedin /> LinkedIn
      </Button>
      <Button
        variant="secondary"
        className={css.ContactButton}
        href="https://github.com/MatthewNobes"
        target="_blank"
      >
        <AiFillGithub /> GitHub
      </Button>
      <Button
        variant="secondary"
        className={css.ContactButton}
        href="mailto:mattnobes.contact@gmail.com"
        target="_blank"
      >
        <AiOutlineMail /> Email
      </Button>
    </div>
  );
};
