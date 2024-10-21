import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-white">
      <button className="text-2xl p-2 focus:outline-none" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-[0px_3px_3px_3px_rgba(0,0,0,0.3)] p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`} // Added z-50 for a higher z-index
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
          className="fixed inset-0 bg-black opacity-0 z-40" // Ensuring the overlay is still lower than the menu
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default HamburgerMenu;
