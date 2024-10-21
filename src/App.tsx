import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Rusable component/Home";
import AllEvent from "./components/Admin/AllEvent";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />


        <Route path="/allEvents" element={<AllEvent />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
