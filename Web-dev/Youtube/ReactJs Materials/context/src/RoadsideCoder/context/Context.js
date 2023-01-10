import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cardReducer } from "./Reducer";
const Cart = createContext();

faker.seed(99);
const Context = ({ children }) => {
  // [...Array(20)] its create 20 undefine array
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.food(640, 480, true),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  // console.log(products);

  const [state, dispatch] = useReducer(cardReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};
export default Context;

export const CartState = () => {
  return useContext(Cart);
};