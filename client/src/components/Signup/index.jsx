import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex items-center justify-center w-screen h-[90vh] shadow-md'>
        <form action="" className='flex flex-col gap-3 bg-white p-4'>
            <h1 className='text-center font-semibold text-xl text-gray-600 uppercase'>Signup</h1>
            <input placeholder='Name' type='text' className='border-gray py-1-400 rounded-md px-2 outline-none py-1 focus:outline-gray-300'/>
            <input placeholder='Email' type='email' className='border-gray-400 rounded-md px-2 outline-none py-1 focus:outline-gray-300'/>
            <input placeholder='Password' type='password' className='border-gray-400 py-1 rounded-md px-2 outline-none focus:outline-gray-300'/>
            <button className='bg-blue-500 text-white outline-none border-none rounded-md w-full p-2 mt-2 hover:bg-blue-600 transition ease-in' type='submit'>Signup</button>
            <p>Already have an account? Please <Link to='/login' className='text-blue-400 underline'>Login</Link></p>
        </form>
    </div>
  )
}

export default Signup