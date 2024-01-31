import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {convertToApiDateFormat, convertToDatepickerFormat} from "../../utils/DateFormatter";

const SearchForm = ({handleClose, from, until, setFrom, setUntil}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const from = e.target.from.value;
    const until = e.target.until.value;
    console.log(
      `form values are: from ${from} until ${until}`
    );
    setFrom(convertToApiDateFormat(from));
    setUntil(convertToApiDateFormat(until));

    handleClose();
  };

  return (
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="datetime-local"
            name="from"
            placeholder="Date from"
            defaultValue={convertToDatepickerFormat(from)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Until</Form.Label>
          <Form.Control
            type="datetime-local"
            name="until"
            placeholder="Date until"
            defaultValue={convertToDatepickerFormat(until)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Search
        </Button>
      </Form>
  );
};

export default SearchForm;
