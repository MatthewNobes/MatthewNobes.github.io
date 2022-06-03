import { Container, Row, Col } from "react-bootstrap";
import css from "./Footer.module.css";
import FooterContactButtons from "./FooterContactButtons";
import getCurrentYear from "../../utils/getCurrentYear";

export const Footer = () => (
  <div className={css.footer}>
    <Container className={css.FooterContainer}>
      <Row>
        <Col></Col>
        <Col xs={5}>
          <h4>Thank you for visiting!</h4>
          <p>Matthew Nobes {getCurrentYear()}</p>
        </Col>
        <Col xs={5}>
          <FooterContactButtons />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
);
