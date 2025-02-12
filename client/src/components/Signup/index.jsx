import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { REGISTER } from '../../API/api'
import toast from 'react-hot-toast'
import Navbar from '../Navbar'

const Signup = () => {

  const navigate = useNavigate();
  
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const res = await axios.post(REGISTER, input, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
       });
       if(res.status === 200) {
        navigate('/login');
        toast.success(res.data.message);
       }
    } catch (error) {
      console.log(error)
      toast.error(res.error.data.message);
    }
  }

  return (
    <>
      <Navbar/>
      <div className='flex items-center justify-center w-screen h-[91vh] shadow-md'>
        <form action="" className='flex flex-col gap-3 bg-white p-4' onSubmit={handleSubmit}>
            <h1 className='text-center font-semibold text-xl text-gray-600 uppercase'>Signup</h1>
            <input placeholder='Full Name' type='text' className='border-gray py-1-400 rounded-md px-2 outline-none py-1 focus:outline-gray-300' onChange={handleChange} value={input.fullname} name='fullname'/>
            <input placeholder='Email' type='email' className='border-gray-400 rounded-md px-2 outline-none py-1 focus:outline-gray-300' onChange={handleChange} value={input.email} name='email'/>
            <input placeholder='Password' type='password' className='border-gray-400 py-1 rounded-md px-2 outline-none focus:outline-gray-300' onChange={handleChange} value={input.password} name='password' autoComplete='false'/>
            <button className='bg-blue-500 text-white outline-none border-none rounded-md w-full p-2 mt-2 hover:bg-blue-600 transition ease-in' type='submit'>Signup</button>
            <p>Already have an account? Please <Link to='/login' className='text-blue-400 underline'>Login</Link></p>
        </form>
    </div>
    </>
  )
}

export default Signup