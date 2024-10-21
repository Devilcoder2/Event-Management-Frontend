import React from 'react'
import Button from '@mui/material/Button';
import HamburgerMenu from './Hamberger';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';



function Navbar() {

  const navigate = useNavigate();

  const handleAllEvents = () => {
    navigate("/allEvents");
  }

  const handleRegisterUser = () => {
    navigate("/registerUser");
  }

  const handleCreateEvent = () => {
    navigate("/createEvent");
  }

  return (
    <div className='h-20 flex justify-between px-6 items-center shadow-md bg-slate-100'>
      <div><HamburgerMenu/></div>
      <div className='flex gap-2'>
      <Button variant="contained" onClick={handleAllEvents}>All events</Button>
     <Button variant="contained" onClick={handleRegisterUser}>Resitered User</Button>
     <Button variant="contained" onClick={handleCreateEvent}>Create event +</Button>
      </div>
      <div className='flex gap-5'>

      <div className='rounded-full w-8 h-8 bg-slate-500'></div>

        <div className=''><LogoutOutlinedIcon/></div>

      </div>
    </div>
  )
}

export default Navbar
