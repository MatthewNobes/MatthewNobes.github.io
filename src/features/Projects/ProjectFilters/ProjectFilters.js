import { Form } from "react-bootstrap";
import css from "./ProjectFilters.module.css";

export const ProjectFilters = (props) => {
  const languageOptions = props.languageOptions;
  const filterValues = props.filterValues;

  return (
    <Form.Group className={css.OptionPane}>
      <Form.Label className={css.OptionLabel}>Project language</Form.Label>
      <Form.Select
        id="languageOption"
        value={filterValues}
        name="languageOption"
        className={css.OptionBox}
        onChange={(e) => {
          props.setFilterValues(e.target.value);
        }}
      >
        {languageOptions.map((option) => {
          return <option id={option}>{option}</option>;
        })}
      </Form.Select>
    </Form.Group>
  );
};
