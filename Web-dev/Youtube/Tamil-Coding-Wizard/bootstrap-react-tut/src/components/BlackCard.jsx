import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "../assets/card-img.jpg";
import ModalScreen from "./ModalScreen";
const BlackCard = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card className="m-3">
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="text-center">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
      {modalShow && (
        <ModalScreen show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </>
  );
};
export default BlackCard;
