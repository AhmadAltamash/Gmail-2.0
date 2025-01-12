import React, { useState } from 'react'
import { MdCropDin, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlinePersonOutline } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoTag } from "react-icons/go";
import Emails from '../Emails';

const toggleItems = [
    {
        icon: <MdInbox size={'18px'}/>,
        text: 'Primary',
    },
    {
        icon: <GoTag size={'18px'}/>,
        text: 'Promotion',
    },
    {
        icon: <MdOutlinePersonOutline size={'18px'}/>,
        text: 'Social',
    },
]


const Inbox = () => {

    const [selected, setSelected] = useState(0);

  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
        <div className='px-4 py-2 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center'>
                    <div className='py-2 px-1 hover:bg-gray-200 rounded-sm transition-allduration-300 cursor-pointer text-gray-600'>
                    <MdCropDin size={'18px'}/>
                    </div>

                    <div className='py-2 hover:bg-gray-200 rounded-sm transition-allduration-300 cursor-pointer text-gray-600'>
                    <FaCaretDown size={'18px'}/>
                    </div>
                </div>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer text-gray-600'>
                    <IoMdRefresh size={'18px'}/>
                </div>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer text-gray-600'>
                    <HiOutlineDotsVertical size={'18px'}/>
                </div>
            </div>

            <div className='flex items-center gap-3 text-gray-600'>
                <span className='text-sm'>1 to 50</span>
                <MdKeyboardArrowLeft size={'18px'}/>
                <MdKeyboardArrowRight size={'18px'}/>
            </div>
        </div>

        <div className='h-[80vh] overflow-y-auto'>
            <div className='flex items-center gap-1 py-2 text-gray-600'>
                {toggleItems.map((item, index) => {
                    return (
                        <button onClick={() => setSelected(index)}  className={`px-5 py-3 hover:bg-gray-200 rounded-sm flex gap-5 items-center outline-none ${selected === index ? "focus:border-b-4 focus:border-blue-700 focus:text-blue-700" : "focus:border-b-4 focus:border-transparent focus:text-gray-400"} md:w-[18%] w-max transition-all duration-200`}>
                            {item.icon}
                            <span>{item.text}</span>
                        </button>
                    )
                })}
            </div>
            <Emails/>
        </div>
    </div>
  )
}

export default Inbox