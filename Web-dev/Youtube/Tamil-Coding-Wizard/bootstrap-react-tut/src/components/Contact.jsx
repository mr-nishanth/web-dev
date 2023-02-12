import {
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-light py-3">
        <div className="text-center my-2 py-5">
          <h2 className="text-primary ">
            Contact Us <i className="bi bi-chat-left-heart"></i>
          </h2>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="bi bi-envelope-open"></i>
                  </InputGroup.Text>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="bi bi-person-fill"></i>
                  </InputGroup.Text>
                  <FloatingLabel controlId="floatingInput" label="User">
                    <Form.Control type="text" placeholder="Username" />
                  </FloatingLabel>
                </InputGroup>

                <FloatingLabel controlId="floatingInput" label="Comment">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    className="mb-3"
                  />
                </FloatingLabel>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Contact;
