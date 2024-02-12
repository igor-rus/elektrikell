import { Card } from "react-bootstrap";
import profilePicture from "../../images/profile_picture.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm";
import { PROJECTS } from "./projects";
import MyProjects from "./MyProjects";

const Myself = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="m-3">
            <Card.Img variant="top" src={profilePicture}/>
            <Card.Body>
              <Card.Title>Igor Rusovitch</Card.Title>
              <Card.Text>
                Hello, I am Igor!
                <br/>
                Software engineer equipped with extensive experience in software development.
                Employs abilities to explain technical challenges to Non-tech-savvy users,
                perform planning and implement business ideas into working software.
                <br/>
                Honest, responsible, polite, team-player.
                <br/>
                Into competitive sports: fencing
                Hobbies: treasure hunting, Board games
                Likes: snowboarding, reading detective novels
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <ContactForm/>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center">Projects I participated at:</p>
          <MyProjects projects={PROJECTS}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Myself;
