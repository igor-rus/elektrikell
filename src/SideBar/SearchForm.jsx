import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const SearchForm = ({handleSideBarClose}) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(
      `form values are: from ${formData.from} until ${formData.until}`
    );
    handleSideBarClose();
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="from">
          <Form.Label>Date from</Form.Label>
          <Form.Control
            type="date"
            name="from"
            placeholder="From"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="until">
          <Form.Label>Date to</Form.Label>
          <Form.Control
            type="date"
            name="until"
            placeholder="Until"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchForm;
