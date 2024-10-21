import UserNavbar from './UserNavbar';
import { Outlet } from 'react-router-dom';

const UserHome = () => {
    return (
        <div>
            <UserNavbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default UserHome;
