import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import PickImage from "../assets/pinkHeadPhone.jpg";
const PickOfTheWeek = () => {
  const [show, setShow] = useState(false);
  return (
    <section id="mustTry" className="my-3">
      <div className="text-center my-2 py-5">
        <h2 className="display-5 text-primary ">
          <i className="bi bi-search-heart"></i> Pick of the Week!
        </h2>
      </div>
      <Container>
        <Row className="align-items-center">
          {/* Image */}
          <Col md={7}>
            <Image src={PickImage} alt="Pink Head Phone" fluid />
          </Col>
          {/* Content */}
          <Col md={5}>
            <div className="p-3">
              <h2 className="h1">Double strong</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sint harum doloremque pariatur sed obcaecati, similique iste
                soluta recusandae molestiae!
              </p>
              <Button variant="primary" onClick={() => setShow(true)}>
                <i className="bi bi-basket"></i> Buy Now
              </Button>
            </div>
          </Col>
        </Row>
        {show && (
          <ToastContainer
            className="p-3 position-fixed bottom-0 end-0"
            position={"bottom-end"}
          >
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={2000}
              autohide
            >
              <Toast.Header closeButton={false}>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Added!</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Item added to message</Toast.Body>
            </Toast>
          </ToastContainer>
        )}
      </Container>
    </section>
  );
};
export default PickOfTheWeek;
