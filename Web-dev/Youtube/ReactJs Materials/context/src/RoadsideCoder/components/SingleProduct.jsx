import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> $ {product.price.split(".")[0]} </span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
            <Rating rating={product.rating} />
          </Card.Subtitle>
          <Button variant="danger">Remove from Cart</Button>
          <Button disabled={!product.inStock}>
            {!product.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default SingleProduct;
