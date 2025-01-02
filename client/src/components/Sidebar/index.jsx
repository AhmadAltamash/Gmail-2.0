import React from 'react'
import { RiPencilLine } from "react-icons/ri";
import { MdInbox, MdOutlineDrafts, MdKeyboardArrowDown } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { LuClock4 } from "react-icons/lu";
import { BiSend } from "react-icons/bi";

const sidebarItems = [
    {
        icon: <MdInbox size={'20px'}/>,
        text: "Inbox"
    },
    {
        icon: <IoMdStarOutline size={'20px'}/>,
        text: "Starred"
    },
    {
        icon: <LuClock4 size={'20px'}/>,
        text: "Snoozed"
    },
    {
        icon: <BiSend size={'20px'}/>,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={'20px'}/>,
        text: "Drafts"
    },
    {
        icon: <MdKeyboardArrowDown size={'20px'}/>,
        text: "More"
    },
]

const Sidebar = () => {
  return (
    <div className='w-[15%]'>
        <div className='p-3'> 
            <button className='flex items-center gap-2 bg-[#C2E7FF] rounded-xl p-4 font-[450] hover:shadow-md transition-all duration-200'>
                <RiPencilLine className='font-semibold text-2xl'/>
                Compose
            </button>
        </div>
        <div className='text-gray-600'>
            {
                sidebarItems.map((item, index) => {
                    return (
                        <div className='flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:bg-gray-200 cursor-pointer ease-in-out duration-200' key={index}>
                            {item.icon}
                            <p>{item.text}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar