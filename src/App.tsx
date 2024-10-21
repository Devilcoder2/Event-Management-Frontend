import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Rusable component/Home';
import AllEvent from './components/Admin/AllEvent';
import RegisteredUser from './components/Admin/ResisteredUser';
import CreateEventForm from './components/Admin/CreateEventForm';
import UserHome from './components/User/UserHome';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/allEvents' element={<AllEvent />}></Route>
                    <Route
                        path='/registerUser'
                        element={<RegisteredUser />}
                    ></Route>
                    <Route
                        path='/createEvent'
                        element={<CreateEventForm />}
                    ></Route>
                </Route>
                <Route path='/user' element={<UserHome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
