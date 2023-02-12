// Stack is only used for single dimension system (Flexbox)

import { Col, Container, Row } from "react-bootstrap";

// Grid is 2 dimension
const BasicGrid = () => {
  return (
    <Container>
      {/* Basic Grid */}
      <Row>
        <Col className="text-bg-primary border">Grid</Col>
        <Col className="text-bg-success border">Grid</Col>
      </Row>
      <Row>
        <Col className="text-bg-success border">Grid</Col>
        <Col className="text-bg-primary border">Grid</Col>
      </Row>
    </Container>
  );
};
export default BasicGrid;
