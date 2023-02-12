import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Orders from "./Orders";
const Cart = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant="light"
        onClick={() => setShow(!show)}
        className="me-2 position-relative"
      >
        <l className="bi bi-cart4"></l>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          3
        </span>
        <span className="visually-hidden">Cart</span>
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Orders />
          <div className="text-end">
            <Button variant="primary" className="mt-3">
              Checkout
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Cart;
