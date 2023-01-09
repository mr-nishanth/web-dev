import Filter from "../components/Filter";
import SingleProduct from "../components/SingleProduct";
import { CartState } from "../context/Context";
import "./style.css";
const Home = () => {
  const {
    state: { products },
    dispatch,
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
export default Home;
