import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AllUsers from '../Admin/AllEvent';
import RegisteredUser from '../Admin/ResisteredUser';
// import CreateUser from '../Admin/CreateUser';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'allUsers':
        return <AllUsers />;
      case 'registeredUser':
        return <RegisteredUser />;
      case 'createUser':
        return <CreateUser />;
      default:
        return <p>Please select an option from the menu.</p>;
    }
  };

  return (
    <div className="relative">
      <button className="text-2xl p-2 focus:outline-none" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-[0px_3px_3px_3px_rgba(0,0,0,0.3)] p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end">
          <CloseIcon onClick={toggleMenu} />
        </div>
        <ul className="space-y-2 mt-6">
          <li
            className="hover:text-blue-500 cursor-pointer bg-slate-100 font-bold rounded-md text-lg p-2"
            onClick={() => setSelectedComponent('allUsers')}
          >
            All Users
          </li>
          <li
            className="hover:text-blue-500 cursor-pointer bg-slate-100 font-bold rounded-md text-lg p-2"
            onClick={() => setSelectedComponent('registeredUser')}
          >
            Registered User
          </li>
          <li
            className="hover:text-blue-500 cursor-pointer bg-slate-100 font-bold rounded-md text-lg p-2"
            onClick={() => setSelectedComponent('createUser')}
          >
            Create User
          </li>
          <li className="hover:text-blue-500 cursor-pointer bg-slate-100 font-bold rounded-md text-lg p-2">
            Contact
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-0"
          onClick={toggleMenu}
        ></div>
      )}

      
      {/* <div className="p-4 mt-4">{renderComponent()}</div> */}
    </div>
  );
};

export default HamburgerMenu;
