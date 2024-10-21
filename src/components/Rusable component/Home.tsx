import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
