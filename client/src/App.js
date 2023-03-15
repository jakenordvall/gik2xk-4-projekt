import "./App.css";
import Welcome from "./views/Welcome";
import Products from "./views/Products";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./views/ProductDetail";
import AdminView from "./views/AdminView";
import EditView from "./views/EditView";
import { useState, createContext } from "react";
import CartView from "./views/CartView";
export const userContext = createContext({});

function App() {
  const [signedInUser, setSignedInUser] = useState({});

  return (
    <userContext.Provider value={{ signedInUser, setSignedInUser }}>
      <>
        <Navbar setSignedInUser={setSignedInUser} />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/adminView" element={<AdminView />} />
          <Route exact path="/products/edit/:id" element={<EditView />} />
          <Route exact path="/carts/:id" element={<CartView />} />
        </Routes>
      </>
    </userContext.Provider>
  );
}

export default App;
