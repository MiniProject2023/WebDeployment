import "./App.css";
import { BrowserRouter, RouteProps, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PgFOF from "./Components/PgFOF";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/Userprofile" element={<Profile />} />
        <Route path="*" element={<PgFOF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
