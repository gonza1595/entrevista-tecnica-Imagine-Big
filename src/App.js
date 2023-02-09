import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
