import { Col, Container, Row } from "react-bootstrap";

const BUtilityClasses = () => {
  return (
    <Container>
      <h1>Utility Classes</h1>
      <Row>
        <Col className="border-end">
          {/* Display */}
          <h6>Display</h6>
          <p className="text-bg-success m-3 p-3 d-none">d-none</p>
          <p className="text-bg-success m-3 p-3 d-inline">d-inline</p>
          <p className="text-bg-success m-3 p-3 d-inline-block">
            d-inline-block
          </p>
          <p className="text-bg-success m-3 p-3 d-block">d-block</p>
          <p className="text-bg-success m-3 p-3 d-table">d-table</p>
          <p className="text-bg-success m-3 p-3 d-table-row">d-table-row</p>
          <p className="text-bg-success m-3 p-3 d-table-cell">d-table-cell</p>
          <p className="text-bg-success m-3 p-3 d-flex">d-flex</p>
          <p className="text-bg-success m-3 p-3 d-inline-flex">d-inline-flex</p>
        </Col>

        <Col className="border-end">
          <Row>
            {/* Flex */}
            <div className="d-flex">
              <p className="m-2 p-2 text-bg-info rounded">Flex</p>
              <p className="m-2 p-2 text-bg-info rounded">Flex</p>
              <p className="m-2 p-2 text-bg-info rounded">Flex</p>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <p className="m-2 p-2 text-bg-info rounded">Flex</p>
              <p className="m-2 p-2 text-bg-info rounded">Flex</p>
              <p className="m-2 p-2 text-bg-info rounded">Flex</p>
            </div>
            <hr />
            {/* for centering ,In this case column we use align-items */}
            <div className="d-flex flex-column align-items-center">
              <p className="m-2 p-2 text-bg-info rounded w-50 ">Flex</p>
              <p className="m-2 p-2 text-bg-info rounded w-50 ">Flex</p>
              <p className="m-2 p-2 text-bg-info rounded w-50 ">Flex</p>
            </div>
            <hr />
            {/* for centering ,In this case row we use justify-content */}
            <div className="d-flex justify-content-center">
              <p className="m-2 p-2 text-bg-info rounded w-25 ">Flex</p>
              <p className="m-2 p-2 text-bg-info rounded w-25 ">Flex</p>
              <p className="m-2 p-2 text-bg-info rounded w-25 ">Flex</p>
            </div>
            <hr />
            <div className="d-flex flex-column align-items-center">
              <p className="m-2 p-2 text-bg-info rounded w-25 align-self-end">
                Flex
              </p>
              <p className="m-2 p-2 text-bg-info rounded w-25 ">Flex</p>
              <p className="m-2 p-2 text-bg-info rounded w-25 align-self-start">
                Flex
              </p>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default BUtilityClasses;
