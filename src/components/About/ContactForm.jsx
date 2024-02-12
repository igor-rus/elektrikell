import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
  return (
    <>
      <Form id="contactForm" className="m-3 w-100">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="textarea"
            name="Message"
            placeholder="Your message"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Send me copy</Form.Label>
          <Form.Check className={"align-content-lg-start"}
            type="checkbox"
            id="sendCopy"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Send message
        </Button>
      </Form>
    </>
  )
}

export default ContactForm
