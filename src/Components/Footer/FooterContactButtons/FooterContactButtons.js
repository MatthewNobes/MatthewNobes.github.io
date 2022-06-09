import { Button } from "react-bootstrap";
import css from "./FooterContactButtons.module.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const contactFormats = [
  {
    name: "LinkedIn",
    symbol: <AiFillLinkedin />,
    urlLink: "https://www.linkedin.com/in/matthew-nobes-10b834156/",
  },
  {
    name: "GitHub",
    symbol: <AiFillGithub />,
    urlLink: "https://github.com/MatthewNobes",
  },
  {
    name: "Email",
    symbol: <AiOutlineMail />,
    urlLink: "mailto:mattnobes.contact@gmail.com",
  },
];

export const FooterContactButtons = () => {
  return (
    <div className={css.ButtonBlock}>
      {contactFormats.map((contactForm) => {
        return (
          <Button
            key={contactForm.name}
            variant="secondary"
            className={css.ContactButton}
            href={contactForm.urlLink}
            target="_blank"
          >
            {contactForm.symbol} {contactForm.name}
          </Button>
        );
      })}
    </div>
  );
};
