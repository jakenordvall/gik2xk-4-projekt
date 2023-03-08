import "./App.css";
import Welcome from "./views/Welcome";
import Products from "./views/Products";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
