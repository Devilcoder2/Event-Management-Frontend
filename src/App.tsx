import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Rusable component/Home";
import AllEvent from "./components/Admin/AllEvent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allEvents" element={<AllEvent />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
