import { Container } from "react-bootstrap";
import css from "./Footer.module.css";
import FooterContactButtons from "./FooterContactButtons";
import getCurrentYear from "../../utils/getCurrentYear";

export const Footer = () => (
	<div className={css.Footer} id="footer">
		<Container className={css.FooterContainer}>
			<div className={css.FooterList}>
				<h4>Thank you for visiting!</h4>
				<p>Matthew Nobes {getCurrentYear()}</p>
			</div>
			<div className={css.FooterList}>
				<FooterContactButtons />
			</div>
		</Container>
	</div>
);
