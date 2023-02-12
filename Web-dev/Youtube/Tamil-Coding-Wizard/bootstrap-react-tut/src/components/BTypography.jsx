import { Container } from "react-bootstrap/esm";
import { Col } from "react-bootstrap/esm";
import { Row } from "react-bootstrap/esm";
//* Note: Explore more about content -> typography and utilities -> text in bootstrap
const BTypography = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            {/* Heading */}
            <h6>Heading</h6>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Heading 1</p>
            <p className="h1">Heading 1</p>
          </Row>
          <hr />
          <Row>
            {/* Lead and muted-text */}
            <h6>Lead and muted-text</h6>
            <p>paragraph</p>
            <p className="lead">This is a lead paragraph</p>
            <p className="text-muted">This is a muted paragraph</p>
          </Row>
          <hr />
          <Row>
            {/* Text Alignment */}
            <h6>Text Alignment</h6>
            <p className="text-center">
              Center aligned text on all viewport sizes.
            </p>
            <p className="display-6 text-start">Text Start</p>
            <p className="display-6 text-end">Text end</p>
          </Row>
          <hr />
          <Row>
            {/* Text Transform */}
            <h6>Text Transform</h6>
            <p className="text-lowercase">Lowercased text.</p>
            <p className="text-uppercase">Uppercase text.</p>
            <p className="text-capitalize">Capitalized text.</p>
          </Row>
          <hr />
          <Row>
            {/* Font Size */}
            <h6>Font Size</h6>
            <h6 className="fs-1">H 6</h6>
            <h6 className="fs-6">H 6</h6>
          </Row>
          <hr />
          <Row>
            {/* Font Weight */}
            <h6>Font Weight </h6>
            <p className="fw-normal">Weight</p>
            <p className="fw-light">Weight</p>
            <p className="fw-lighter">Weight</p>
            <p className="fw-bolder">Weight</p>
            <p className="fw-bold">Weight</p>
          </Row>
        </Col>
        <Col>
          <Row>
            {/* Display Heading */}
            <h6>Display Heading</h6>
            <h1 className="display-1">D H 1</h1>
            <h1 className="display-2">D H 2</h1>
            <h1 className="display-3">D H 3</h1>
            <h1 className="display-4">D H 4</h1>
            <h1 className="display-5">D H 5</h1>
            <h1 className="display-6">D H 6</h1>
          </Row>
          <hr />
          <Row>
            {/* Font Style */}
            <h6>Font Style</h6>
            <p className="fst-italic">Italic</p>
            <p className="fst-normal">Normal</p>
          </Row>
          <hr />
          <Row>
            {/* Text Decoration */}
            <h6>Text Decoration</h6>
            <p className="text-decoration-none">None</p>
            <p className="text-decoration-underline">Underline</p>
            <p className="text-decoration-line-through">Line-through</p>
            <p className="text-decoration-overline">Overline</p>
            <a href="#" className="text-decoration-none">
              Google
            </a>
          </Row>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};
export default BTypography;
