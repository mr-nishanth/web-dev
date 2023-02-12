import { Carousel, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// * Note Grid only working under container

const carouselItem = [];
import Angle from "../assets/angle.jpg";
import BlueSea from "../assets/blueSea.jpg";
import ButterFly from "../assets/butterfly.jpg";
import SkyBlue from "../assets/skyblue.jpg";
const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={20000}>
              <Image
                fluid
                rounded
                className="d-block w-100 "
                src={Angle}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Angle</h3>
                <p className="d-none d-sm-block">This is Angle</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={20000}>
              <Image
                fluid
                rounded
                className="d-block w-100 "
                src={SkyBlue}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Sky Blue</h3>
                <p className="d-none d-sm-block">This is Sky Blue</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={20000}>
              <Image
                fluid
                rounded
                className="d-block w-100 "
                src={BlueSea}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Blue Sea</h3>
                <p className="d-none d-sm-block">This is Blue Sea</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={20000}>
              <Image
                fluid
                rounded
                className="d-block w-100 "
                src={ButterFly}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>ButterFly</h3>
                <p className="d-none d-sm-block">This is ButterFly</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Welcome to Blackly</h2>
        <p className="lead text-muted">Lorem ipsum dolor sit amet.</p>
      </div>
    </Container>
  );
};
export default Banner;
