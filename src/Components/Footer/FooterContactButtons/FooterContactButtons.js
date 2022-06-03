import { Button } from "react-bootstrap";
import css from "./FooterContactButtons.module.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export const FooterContactButtons = () => {
  return (
    <div className={css.ButtonBlock}>
      <Button variant="outline-primary" className={css.ContactButton}>
        <AiFillLinkedin /> LinkedIn
      </Button>
      <Button variant="outline-primary" className={css.ContactButton}>
        <AiFillGithub /> GitHub
      </Button>
      <Button variant="outline-primary" className={css.ContactButton}>
        <AiOutlineMail /> Email
      </Button>
    </div>
  );
};
