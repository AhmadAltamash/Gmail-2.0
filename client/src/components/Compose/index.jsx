import React from 'react'
import { MdOutlineMinimize } from 'react-icons/md'
import { CiMaximize1 } from "react-icons/ci";
import { IoIosClose } from 'react-icons/io';

const Compose = () => {
  return (
    <div className='bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md'>
      <div className='p-2 bg-[#F2F6FC] flex justify-between items-center'>
        <h1 className='font-normal'>New Message</h1>
        <div className='flex items-center gap-1'>
          <span className='hover:bg-gray-200 hover:cursor-pointer p-[0.1rem] rounded-sm text-gray-700'><MdOutlineMinimize size={'20px'}/></span>
          <span className='hover:bg-gray-200 hover:cursor-pointer p-[0.1rem] rounded-sm text-gray-700'><CiMaximize1 size={'20px'}/></span>
          <span className='hover:bg-gray-200 hover:cursor-pointer p-[0.1rem] rounded-sm text-gray-700'><IoIosClose size={'20px'}/></span>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Compose