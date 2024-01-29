import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const SearchForm = ({handleClose}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(
      `form values are: from ${e.target.from.value} until ${e.target.until.value}`
    );
    handleClose();
  };

  return (
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="date"
            name="from"
            placeholder="Date from"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Utnil</Form.Label>
          <Form.Control
            type="date"
            name="until"
            placeholder="Date until"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Search
        </Button>
      </Form>
  );
};

export default SearchForm;
