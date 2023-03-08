import "./App.css";
import Welcome from "./views/Welcome.js";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
      </Routes>
    </>
  );
}

export default App;
