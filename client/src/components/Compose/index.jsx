import React, { useState } from 'react'
import { MdOutlineMinimize } from 'react-icons/md'
import { CiMaximize1 } from "react-icons/ci";
import { IoIosClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setOpen } from '../../redux/appSlice';
import toast from 'react-hot-toast';
import axios from 'axios';
import { SEND_MAIL } from '../../API/api';

const Compose = () => {

  const { open, email } = useSelector(store => store.app)
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(SEND_MAIL, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
       });
       if(res.status === 201) {
        toast.success('Email sent successfully');
        setFormData({
          to: '',
          subject: '',
          message: '',
        })
       }
       dispatch(setEmail([...email, res.data.email]));
    } catch (error) {
      console.log(error)
      toast.error(res.error.data.message)
    }
    dispatch(setOpen(false))
  }

  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md transition-all duration-300`}>
      <div className='p-2 bg-[#F2F6FC] flex justify-between items-center rounded-t-md'>
        <h1 className='font-semibold text-[14px]'>New Message</h1>
        <div className='flex items-center gap-1'>
          <span className='hover:bg-gray-200 hover:cursor-pointer p-[0.1rem] rounded-sm text-gray-700'><MdOutlineMinimize size={'20px'}/></span>
          <span className='hover:bg-gray-200 hover:cursor-pointer p-[0.1rem] rounded-sm text-gray-700'><CiMaximize1 size={'20px'}/></span>
          <span className='hover:bg-gray-200 hover:cursor-pointer p-[0.1rem] rounded-sm text-gray-700' onClick={() => dispatch(setOpen(false))}><IoIosClose size={'20px'}/></span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col p-3 gap-2'>
        <input type="text" placeholder='To' className='border-b border-gray-300 outline-none' onChange={handleChange} name='to' value={formData.to}/>
        <input type="text" placeholder='Subject' className='border-b border-gray-300 pb-1 outline-none'  onChange={handleChange} name='subject' value={formData.subject}/>
        <textarea rows={'10'} cols={'30'} className='outline-none py-1 resize-none' onChange={handleChange} name='message' value={formData.message}></textarea>
        <button className='rounded-2xl bg-blue-600 text-white h-[1.8rem] w-[25%] transition ease-out duration-300 hover:bg-blue-700'>Send</button>
      </form>
    </div>
  )
}

export default Compose