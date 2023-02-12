import { Col } from "react-bootstrap/esm";
import { Row } from "react-bootstrap/esm";
import { Container } from "react-bootstrap/esm";

const BColors = () => {
  return (
    <Container>
      <Row className="gap-5">
        <Col>
          <Row>
            {/* Theme colors ans colors usage */}
            <h6>Theme colors ans colors usage</h6>
            <p className="text-primary">Primary</p>
            <p className="text-white bg-primary">White</p>
            <p className="text-white text-bg-primary">White</p>
            <p className="text-secondary">Secondary</p>
            <p className="text-success">Success</p>
            <p className="text-white text-bg-danger">Danger</p>
            <p className="text-danger">Danger</p>
            <p className="text-warning">Warning</p>
            <p className="text-info">Info</p>
            <p className="text-light bg-dark">Light</p>
            <p className="text-dark">Dark</p>
            <p className="text-muted">Muted</p>
            <p className="text-body">Body</p>
            <p className="text-black-50">Black 50</p>
            <p className="text-white-50 bg-dark">White 50</p>
          </Row>
          <hr />
          <Row>
            {/* opacity */}
            <h6>opacity</h6>
            <p className="text-white bg-primary bg-opacity-25">Opacity</p>
            <p className="text-white bg-primary bg-opacity-50">Opacity</p>
            <p className="text-white bg-primary bg-opacity-75">Opacity</p>
            <p className="text-white bg-primary bg-opacity-100">Opacity</p>
            <p className="text-bg-warning text-danger-50 text-end">
              Text Opacity
            </p>
          </Row>
        </Col>
        <Col>
          <Row>
            {/* Box modal classes */}
            <h6>Box modal classes</h6>
            {/* Padding 1 to 5(48px) */}
            {/* Know to more spacing in bootstrap */}
            <p className="bg-primary p-1">Primary</p>
            <p className="bg-primary p-3">Primary</p>
            <hr />
            {/* t - top ; b - bottom ; s - start ; e - end ; px - horizontal(ps , pe) ; py - vertical(pt , pb) ; auto ; removing padding using 0 */}
            <p className="bg-success pt-3">Top</p>
            <p className="bg-success pb-3">Bottom</p>
            <p className="bg-success ps-3">Start</p>
            <p className="bg-success pe-3">End</p>
            <p className="bg-success text-center p-5 ">Remove padding</p>
            <p className="bg-success text-center p-5 pb-0">Remove padding</p>
            <hr />
            {/* Margin 1 to 5(48px) */}
            {/* //* NOTE by default all element had bottom margin (removing mb-0)*/}
            <h1>Margin</h1>
            <div className="bg-success">
              <p className=" bg-black text-danger text-center m-5 p-5">
                Margin
              </p>
            </div>
            {/* for Center element (width is important because p is block element )*/}
            <p className="mx-auto bg-danger mt-3" style={{ width: 200 }}>
              center using mx-auto
            </p>
          </Row>
        </Col>
        <Col>
          <Row>
            {/* Border */}
            <p className="text-bg-info p-3 mt-5 border border-danger">Border</p>
            {/* border-3 => width ; border-bottom-0 */}
            <p className="text-bg-info p-3 mt-5 border-danger border border-3">
              Border
            </p>
            <p className="text-bg-info p-3 mt-5 border-danger border border-3 border-bottom-0">
              Border
            </p>
          </Row>
          <Row>
            {/* Border styles */}
            <p className="text-bg-info p-3 mt-5 border border-danger rounded">
              Border Dashed
            </p>
            <p className="text-bg-info p-3 mt-5 border border-danger rounded-circle">
              Border Dashed
            </p>
            <p className="text-bg-info p-3 mt-5 border border-danger rounded-pill">
              Border Dashed
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default BColors;
