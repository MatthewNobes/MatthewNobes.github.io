import LanguageCard from "./LanguageCard";
import css from "./LanguageCardPane.module.css";

export const LanguageCardPane = () => {
	const languages = [
		"JavaScript",
		"C#",
		"C",
		"Assembly",
		"HTML",
		"CSS",
		"Java",
		"Python",
		"SQL",
		"React & Redux",
		"CQL",
		"Svelte",
		"VB.NET",
		"TypeScript",
	];

	const sortedLanguages = languages.sort();

	return (
		<div data-testid="LanguageCardPane" className={css.LanguageCardPane}>
			{sortedLanguages.map((language) => {
				return <LanguageCard key={language} language={language} />;
			})}
		</div>
	);
};
