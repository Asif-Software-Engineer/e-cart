import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import ProductFilter from "../src/components/productfilter/ProductFilter";
import SingleProduct from "./components/productfilter/SingleProduct";
import { useSelector } from "react-redux";
// import Login from './components/login/Login';
// import Profile from './components/profile/Profile';

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log("cart", cart);
  console.log("totalAmount", totalAmount);
  console.log("totalPrice", totalPrice);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/productFilter/:type"
            element={<ProductFilter></ProductFilter>}
          ></Route>
          <Route
            path="/productFilter/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Profile/> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
