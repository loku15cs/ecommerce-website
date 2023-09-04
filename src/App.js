import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import SingleProduct from "./SingleProduct"
import Cart from "./Cart"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Products" element={<Products/>}/>
        <Route path="SingleProduct" element={<SingleProduct/>}/>
        <Route path="Cart" element={<Cart/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
