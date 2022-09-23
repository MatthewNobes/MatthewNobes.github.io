import css from "./LanguageCard.module.css";

export const LanguageCard = (props) => {
	const language = props.language;

	return (
		<div id={language} className={css.LanguageCard} data-testid="LanguageCard">
			<h2>{language}</h2>
		</div>
	);
};
