import "./App.css";
import Welcome from "./views/Welcome";
import Products from "./views/Products";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./views/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/products/:id" element={<ProductDetail />}/>
      </Routes>
    </>
  );
}

export default App;
