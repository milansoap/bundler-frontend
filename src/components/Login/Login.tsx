import React, { useState, useContext } from 'react';
import AuthService from '../../services/AuthService'; // adjust the path as necessary
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Login = () => {

  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const data = await AuthService.login(email, password);
    console.log(data)
    if (data?.status === 'OK') {
      setAuth({
        isAuthenticated: true,
        // token: data.token TBI
      });
      toast('You have logged in successfully! ',
        {
          icon: '✔️ ',
          style: {
            borderRadius: '10px',
            background: 'green',
            color: '#fff',
          },
        }
      );
      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
      
    } else {
      toast(data.message,
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: 'red',
            color: '#fff',
          },
        }
      );
    }
  };



  return (
    <div className='align-center h-full d-flex justify-center align-center'>
      <Toaster />
      <div className='container p-5 w-35'>
        <h1 className='justify-center d-flex'>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn__primary mt-2 d-block mx-auto w-full mt-4"
          >
            Login
          </button>
        </form>
        <a className='text-muted d-flex justify-center mt-1'>Don't have an account?</a>
      </div>
    </div>
  );
};

export default Login;
