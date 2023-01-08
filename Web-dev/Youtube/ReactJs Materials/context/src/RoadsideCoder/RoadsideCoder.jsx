import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PageNotFount from "./pages/PageNotFount";
const RoadsideCoder = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="*" exact element={<PageNotFount />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoadsideCoder;
