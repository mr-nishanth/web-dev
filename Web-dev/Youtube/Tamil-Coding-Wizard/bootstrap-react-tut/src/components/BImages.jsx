import { Container } from "react-bootstrap/esm";
import Image from "react-bootstrap/Image";
import BlueSea from "../assets/blueSea.jpg";
const BImages = () => {
  return (
    <Container>
      {/* Image responsive using fluid */}
      {/* Image round border using rounded */}
      {/* Image circle border using roundedCircle */}
      {/* Image circle outline  using thumbnail */}
      <Image src={BlueSea} alt="blueSea" fluid roundedCircle thumbnail />
    </Container>
  );
};
export default BImages;
