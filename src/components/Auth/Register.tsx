import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const RegisterHo = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post<{ message: string }>(
        'http://localhost:4000/api/v1/user/register',
        { name, phone, email, role, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
      setRole('');
      setIsAuthorized(true);
    } catch (error: any) {
      if (error.response) {
        console.error('Server Error:', error.response.data.message);
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={RegisterHo}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Role"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
