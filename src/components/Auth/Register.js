import React, { useState } from 'react'


const Register = () => {
    const[email,setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[phone, setPhone] = useState("");
    const[name,setName] = useState("");
    const[role,setRole] = useState("");


    const RegisterHo = async(e)=>{
        e.preventDefault();
        try {
            const { data } = await axios.post(
              "http://localhost:4000/api/v1/user/register",
              { name, phone, email, role, password },
              {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              }
            );
            toast.success(data.message);
            setName("");
            setEmail("");
            setPassword("");
            setPhone("");
            setRole("");
            setIsAuthorized(true);
          } catch (error) {
            toast.error(error.response.data.message);
          }
        };
      
        if(isAuthorized){
          return <Navigate to={'/'}/>
        }

  return (
    <>
        
    </>
  )
}

export default Register
