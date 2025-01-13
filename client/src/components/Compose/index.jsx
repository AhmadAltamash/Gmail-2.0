import React from 'react'
import { MdOutlineMinimize } from 'react-icons/md'
import { CiMaximize1 } from "react-icons/ci";
import { IoIosClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/appSlice';

const Compose = () => {

  const {open} = useSelector(store => store.app)

  const dispatch = useDispatch();

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
      <form action="" className='flex flex-col p-3 gap-2'>
        <input type="text" placeholder='To' className='border-b border-gray-300 outline-none'/>
        <input type="text" placeholder='Subject' className='border-b border-gray-300 pb-1 outline-none' />
        <textarea rows={'10'} cols={'30'} className='outline-none py-1 resize-none'></textarea>
      </form>
    </div>
  )
}

export default Compose