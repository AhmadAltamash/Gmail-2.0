import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../API/api';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { setUser } from '../../redux/appSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const res = await axios.post(LOGIN, input, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
       });
       if(res.status === 200) {
        dispatch(setUser(res.data.user));
        navigate('/');
        toast.success(res.data.message);
       }
    } catch (error) {
      console.log(error)
      toast.error(res.error.data.message);
    }
  }

  return (
    <div className='flex items-center justify-center w-screen h-[90vh] shadow-md'>
        <form action="" className='flex flex-col gap-3 bg-white p-4' onSubmit={handleSubmit}>
            <h1 className='text-center font-semibold text-xl text-gray-600 uppercase'>Login</h1>
            <input placeholder='Email' type='email' className='border-gray-400 rounded-md px-2 outline-none py-1 focus:outline-gray-300' onChange={handleChange} value={input.email} name='email'/>
            <input placeholder='Password' type='password' className='border-gray-400 py-1 rounded-md px-2 outline-none focus:outline-gray-300' autoComplete='false' onChange={handleChange} value={input.password} name='password'/>
            <button className='bg-blue-500 text-white outline-none border-none rounded-md w-full p-2 mt-2 hover:bg-blue-600 transition ease-in' type='submit'>Login</button>
            <p>Don't have an account? Create One <Link to='/signup' className='text-blue-400 underline'>Signup</Link></p>
        </form>
    </div>
  )
}

export default Login