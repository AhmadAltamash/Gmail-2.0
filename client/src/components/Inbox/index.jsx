import React from 'react'
import { MdCropDin } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

const Inbox = () => {
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
        <div className='flex gap-1 items-center'>
            <MdCropDin size={'20px'}/>
            <FaCaretDown size={'20px'}/>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Inbox