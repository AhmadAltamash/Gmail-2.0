import React from 'react'
import { RiPencilLine } from "react-icons/ri";
import { MdInbox, MdOutlineDrafts, MdKeyboardArrowDown } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { LuClock4 } from "react-icons/lu";
import { BiSend } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { setOpen } from '../../redux/appSlice';

const sidebarItems = [
    {
        icon: <MdInbox size={'18px'}/>,
        text: "Inbox"
    },
    {
        icon: <IoMdStarOutline size={'18px'}/>,
        text: "Starred"
    },
    {
        icon: <LuClock4 size={'18px'}/>,
        text: "Snoozed"
    },
    {
        icon: <BiSend size={'18px'}/>,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={'18px'}/>,
        text: "Drafts"
    },
    {
        icon: <MdKeyboardArrowDown size={'18px'}/>,
        text: "More"
    },
]

const Sidebar = () => {

    const dispatch = useDispatch();

  return (
    <div className='w-[15%]'>
        <div className='p-3'> 
            <button onClick={() => dispatch(setOpen(true))} className='flex items-center gap-2 bg-[#C2E7FF] rounded-xl p-4 font-[450] hover:shadow-md transition-all duration-200'>
                <RiPencilLine className='font-semibold text-2xl'/>
                Compose
            </button>
        </div>
        <div className='text-gray-600'>
            {
                sidebarItems.map((item, index) => {
                    return (
                        <button className='flex items-center pl-6 pr-8 py-1 rounded-r-full gap-4 my-2 hover:bg-gray-200 cursor-pointer ease-in-out duration-200' key={index}>
                            {item.icon}
                            <p>{item.text}</p>
                        </button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar