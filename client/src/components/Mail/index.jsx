import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IoMdArrowBack, IoMdArrowDropdown } from 'react-icons/io'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineArchive, MdOutlineDriveFileMove, MdOutlineMarkUnreadChatAlt, MdOutlineReport } from 'react-icons/md'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

const Mail = () => {

  const navigate = useNavigate();

  const gotoInbox = () => {
    navigate('/')
  }

  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-2'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div className='rounded-full hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 p-2 text-gray-700 hover:text-gray-800' onClick={gotoInbox}><IoMdArrowBack size={'18px'}/>
          </div>
          <div className='flex items-center gap-2 ml-4 border-r-2 pr-4'>
            <div className='rounded-full hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 p-2 text-gray-700 hover:text-gray-800'>
              <MdOutlineArchive size={'18px'}/>
            </div>
            <div className='rounded-full hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 p-2 text-gray-700 hover:text-gray-800'> 
              <MdOutlineReport size={'18px'}/>
            </div>
            <div className='rounded-full hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 p-2 text-gray-700 hover:text-gray-800'>
              <FaRegTrashAlt size={'16px'}/>
            </div>
          </div>

          <div className='pl-4 flex items-center gap-2'>
            <div className='rounded-full hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 p-2 text-gray-700 hover:text-gray-800'>
              <MdOutlineMarkUnreadChatAlt size={'18px'}/>
            </div>
            <div className='rounded-full hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 p-2 text-gray-700 hover:text-gray-800'>
              <MdOutlineDriveFileMove size={'18px'}/>
            </div>
            <div className='rounded-full hover:cursor-pointer hover:bg-gray-200 transition-all duration-200 p-2 text-gray-700 hover:text-gray-800'>
            <BiDotsVerticalRounded size={'18px'}/>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-3 text-gray-600'>
          <span className='text-sm'>1 to 50</span>
          <MdKeyboardArrowLeft size={'18px'}/>
          <MdKeyboardArrowRight size={'18px'}/>
        </div>
      </div>
      <div className='h-[80vh] overflow-y-auto p-4'>
        <div className='flex items-center justify-between gap-1 bg-white'>
          <div className='flex items-center'>
            <h1 className='text-xl font-medium mr-4'>Subject</h1>
            <span className='bg-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-gray-200 text-[0.63rem] p-[0.1rem] rounded-l-sm'>Inbox
            </span>
            <span className='bg-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-gray-200 p-[0.1rem] rounded-r-sm'><IoCloseOutline size={'14px'}/></span>
          </div>

          <div className='flex-none text-gray-400 my-5 text-sm'>
            <p>15 days ago</p>
          </div>
        </div>
        <div className='text-gray-500 text-sm'> 
          <h1 className=''>taslimahmad@gmail.com</h1>
          <span className='flex items-center gap-1'>to me <span className='text-gray-900 p-[0.01rem] hover:bg-gray-200 hover:cursor-pointer rounded-md'><IoMdArrowDropdown size={'16px'} /></span> </span>
        </div>
        <div className='my-10'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur, hic nam harum illum sed?</p>
        </div>
      </div>
    </div>
  )
}

export default Mail