// Stack is only used for single dimension system (Flexbox)

import { Col, Container, Row } from "react-bootstrap";

// Grid is 2 dimension
const BasicGrid = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-bg-primary border">Grid</Col>
          <Col className="text-bg-success border">Grid</Col>
        </Row>
        <Row>
          <Col className="text-bg-success border">Grid</Col>
          <Col className="text-bg-primary border">Grid</Col>
        </Row>
      </Container>
      {/* //* Setting one column width */}
      <Container className="mt-3">
        <Row>
          <Col className="text-bg-primary border" xs={6}>
            Column 6
          </Col>
          <Col className="text-bg-success border">Grid</Col>
        </Row>
        <Row>
          <Col className="text-bg-success border" xs={5}>
            Column 6
          </Col>
          <Col className="text-bg-primary border">Grid</Col>
        </Row>
      </Container>
      {/* ================================== */}
      <Container className="mt-3">
        <Row>
          <Col className="text-bg-primary border" xs={6}>
            XS C6
          </Col>
          <Col className="text-bg-success border">Grid</Col>
          <Col className="text-bg-success border">Grid</Col>
        </Row>
        <Row>
          <Col className="text-bg-success border" xs={5}>
            XS C6
          </Col>
          <Col className="text-bg-primary border">Grid</Col>
          <Col className="text-bg-primary border">Grid</Col>
        </Row>
      </Container>
      {/* ================================== */}
      {/* xs and sm took (mobile)100% width */}
      <Container className="mt-3">
        <Row>
          <Col className="text-bg-danger border" md={6}>
            MD C6
          </Col>
          <Col className="text-bg-success border">Grid</Col>
        </Row>
        <Row>
          <Col className="text-bg-success border" md={5}>
            MD C5
          </Col>
          <Col className="text-bg-danger border">Grid</Col>
        </Row>
      </Container>
      <Container className="mt-3">
        {/* =============== Variable width content =============== */}
        <Row className="justify-content-md-center">
          <Col xs lg="2" className="text-bg-success border">
            1 of 3
          </Col>
          <Col className="text-bg-success border" md="auto">
            {/* <Col className="text-bg-success border"> */}
            Variable width content
          </Col>
          <Col xs lg="2" className="text-bg-success border">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col className="text-bg-success border">1 of 3</Col>
          <Col className="text-bg-success border" md="auto">
            Variable width content
          </Col>
          <Col className="text-bg-success border" xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        {/* =============== Responsive grids =============== */}
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col className="text-bg-info border" xs={12} md={8}>
            xs=12 md=8
          </Col>
          <Col className="text-bg-info border" xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col className="text-bg-info border" xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col className="text-bg-info border" xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col className="text-bg-info border" xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col className="text-bg-info border" xs={6}>
            xs=6
          </Col>
          <Col className="text-bg-info border" xs={6}>
            xs=6
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        {/* Setting column widths in Row */}
        <h6>Setting column widths in Row</h6>
        <p>
          xs={2} md={4} lg={6}
        </p>
        <p>
          xs={1} md={2}
        </p>
        <p>xs="auto"</p>
        <Row xs={2} md={4} lg={6}>
          <Col className="text-bg-dark border">1 of 2</Col>
          <Col className="text-bg-dark border">2 of 2</Col>
        </Row>
        <Row xs={1} md={2}>
          <Col className="text-bg-dark border">1 of 3</Col>
          <Col className="text-bg-dark border">2 of 3</Col>
          <Col className="text-bg-dark border">3 of 3</Col>
        </Row>
        <Row xs="auto">
          <Col className="text-bg-dark border">1 of 3</Col>
          <Col className="text-bg-dark border">2 of 3</Col>
          <Col className="text-bg-dark border">3 of 3</Col>
        </Row>
        <Row md={4} className="">
          {/* Excepting 4 col but 3 col is given so 1 col was occupied empty space */}
          <Col className="text-bg-secondary border">1 of 3</Col>
          <Col className="text-bg-secondary border" xs={6}>
            2 of 3
          </Col>
          <Col className="text-bg-secondary border">3 of 3</Col>
        </Row>
        <Row md={3}>
          <Col className="text-bg-secondary border">1 of 3</Col>
          <Col className="text-bg-secondary border" xs={6}>
            2 of 3
          </Col>
          <Col className="text-bg-secondary border">3 of 3</Col>
        </Row>
      </Container>
    </>
  );
};
export default BasicGrid;
