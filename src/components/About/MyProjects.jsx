import { Carousel, Image } from "react-bootstrap";

const MyProjects = ({projects}) => {
  return (
    <Carousel className="m-3 text-center">
      {projects.map((item) => (
        <Carousel.Item key={item.id}>
          <Image src={item.logo}/>
          <Carousel.Caption>
            <br/>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default MyProjects;
