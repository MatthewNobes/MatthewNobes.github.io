import { Button } from "react-bootstrap";
import css from "./FooterContactButtons.module.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export const FooterContactButtons = () => {
  return (
    <div className={css.ButtonBlock}>
      <Button variant="outline-primary">
        <AiFillLinkedin /> LinkedIn
      </Button>
      <Button variant="outline-primary">
        <AiFillGithub /> GitHub
      </Button>
      <Button variant="outline-primary">
        <AiOutlineMail /> Email
      </Button>
    </div>
  );
};
