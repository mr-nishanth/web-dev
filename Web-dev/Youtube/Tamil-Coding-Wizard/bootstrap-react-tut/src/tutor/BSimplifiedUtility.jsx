import { Col, Container, Row } from "react-bootstrap";

const BSimplifiedUtility = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <div className="vstack gap-1 align-items-center">
              <p className="m-3 p-3 text-bg-info w-50">VStack</p>
              <p className="m-3 p-3 text-bg-info w-50">VStack</p>
              <p className="m-3 p-3 text-bg-info w-50">VStack</p>
            </div>
            <hr />
            <div className="hstack gap-1 align-items-center">
              <p className="m-3 p-3 text-bg-success w-50">HStack</p>
              <p className="m-3 p-3 text-bg-success w-50">HStack</p>
              <p className="m-3 p-3 text-bg-success w-50">HStack</p>
            </div>
            <hr />
          </Row>
        </Col>
        <Col>
          <Row>
            {/* Shadow */}
            <h6>Shadow</h6>
            <p className="m-3 p-3 text-bg-info shadow">Shadow</p>
            <div className="shadow bg-light m-3 p-3">Shadow</div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default BSimplifiedUtility;
