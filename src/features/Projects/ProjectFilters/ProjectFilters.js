import { Form } from "react-bootstrap";
import css from "./ProjectFilters.module.css";

export const ProjectFilters = (props) => {
	const languageOptions = props.languageOptions;
	const filterValues = props.filterValues;

	return (
		<div className={css.ListHeader}>
			<Form.Group className={css.OptionPane}>
				<Form.Label className={css.OptionLabel} htmlFor="languageOption">
          Project language
				</Form.Label>
				<div className={css.OptionBox}>
					<Form.Select
						id="languageOption"
						value={filterValues}
						name="languageOption"
						onChange={(e) => {
							props.setFilterValues(e.target.value);
						}}
					>
						{languageOptions.map((option) => {
							return <option id={option}>{option}</option>;
						})}
					</Form.Select>
				</div>
			</Form.Group>
		</div>
	);
};
