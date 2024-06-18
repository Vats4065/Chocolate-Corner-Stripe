import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/success" element={<Success />}></Route>
      <Route exact path="/cancel" element={<Cancel />}></Route>
    </Routes>
  );
}

export default App;
