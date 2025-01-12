import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'
import { MdOutlineArchive, MdOutlineMarkUnreadChatAlt, MdOutlineReport } from 'react-icons/md'
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
          </div>


        </div>
      </div>
    </div>
  )
}

export default Mail