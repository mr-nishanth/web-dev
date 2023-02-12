import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlackCard from "./BlackCard";

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-primary my-3 py-5">
            Treat yourself with our blackly world{" "}
            <i className="bi bi-tiktok"></i>
          </h3>
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={6} lg={4} key={item}>
                <BlackCard />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
export default Menu;
