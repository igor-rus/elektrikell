import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {convertToApiDateFormat, convertToDatepickerFormat} from "../../utils/dates";
import { useSelector, useDispatch } from "react-redux";
import { setFrom, setUntil } from "../../services/stateService";
import {closeSideBar} from "../../services/stateService";

const SearchForm = () => {
  const dispatch = useDispatch();
  const from = useSelector((state) => state.date.from);
  const until = useSelector((state) => state.date.until);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const from = e.target.from.value;
    const until = e.target.until.value;
    dispatch(setFrom(convertToApiDateFormat(from)));
    dispatch(setUntil(convertToApiDateFormat(until)));
    dispatch(closeSideBar);
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
