import { Form } from "react-bootstrap";
import css from "./ProjectFilters.module.css";
import PropTypes from "prop-types";

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
							return (
								<option id={option} key={option}>
									{option}
								</option>
							);
						})}
					</Form.Select>
				</div>
			</Form.Group>
		</div>
	);
};

ProjectFilters.propTypes = {
	setFilterValues: PropTypes.func.isRequired,
	languageOptions: PropTypes.array.isRequired,
	filterValues: PropTypes.string.isRequired,
};
