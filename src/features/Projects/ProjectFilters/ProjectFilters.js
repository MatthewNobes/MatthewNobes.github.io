import { Form } from "react-bootstrap";
import css from "./ProjectFilters.module.css";

export const ProjectFilters = () => {
  return (
    <Form.Group className={css.OptionPane}>
      <Form.Label className={css.OptionLabel}>Project language</Form.Label>
      <Form.Select className={css.OptionBox}>
        <option></option>
        <option>JavaScript</option>
        <option>C#</option>
      </Form.Select>
    </Form.Group>
  );
};
