import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Rusable component/Home";
import AllEvent from "./components/Admin/AllEvent";
<<<<<<< HEAD
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
=======
import RegisteredUser from "./components/Admin/ResisteredUser";
import CreateEventForm from "./components/Admin/CreateEventForm";
>>>>>>> 41851f6028f6857ec99f070084436ba5bbbf2b5c

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />


        <Route path="/allEvents" element={<AllEvent />}></Route>
        <Route path="/registerUser" element={<RegisteredUser />}></Route>
        <Route path="/createEvent" element={<CreateEventForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
