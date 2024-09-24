import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import ProductFilter from "../src/components/productfilter/ProductFilter";
import SingleProduct from "./components/productfilter/SingleProduct";
import { useSelector } from "react-redux";
import { Footer } from "./components/footer/Footer";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";

function App() {

  const user = useSelector((state) => state.user.user);
  const {authUser} = user;
  console.log("user", user);
  console.log("authUser", authUser);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ authUser ? <Home /> : <Login/> }></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route
            path="/productFilter/:type"
            element={<ProductFilter></ProductFilter>}
          ></Route>
          <Route
            path="/productFilter/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      {/* <Profile/> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
