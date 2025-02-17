import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedText, setUser } from '../../redux/appSlice';
import toast from 'react-hot-toast';
import axios from 'axios';
import { LOGOUT } from '../../API/api';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { user, searchedText } = useSelector(store => store.app);
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await axios.get(LOGOUT);
            if(res.status === 200) {
                toast.success('Logged out successfully');
                navigate('/login');
                dispatch(setUser(null))
            }
        } catch (error) {
            console.log(error)
            toast.error("Error while logging Out")
        }
    }

    useEffect(() => {
        dispatch(setSearchedText(text))
    }, [text])

  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-4 hover:bg-gray-200 transition-all duration-300 rounded-full cursor-pointer'>
                    <RxHamburgerMenu className='text-xl'/>
                </div>
                <img
                    src='/logo.svg'
                    height={40}
                    width={40}
                    alt='logo'
                />
                <h1 className='text-xl md:text-2xl text-gray-500 font-medium'>Gmail</h1>  
            </div>
        </div>
        { user && (
            <>
                <div className='w-[50%]'>
            <div className='bg-[#EAF1FB] focus:bg-white focus:shadow-md transition-all duration-300 rounded-full px-4 py-2 flex items-center'>
            <IoIosSearch size={'24px'} className='text-gray-700 font-medium'/>
            <input
                type='text'
                placeholder='Search mail'
                className=' bg-transparent border-none outline-none rounded-full w-full px-1'
                value={text}
                name='search'
                onChange={(e) => setText(e.target.value)}
            />
            </div>
        </div>
        <div className='flex items-center gap-3'>
            <div className='rounded-full p-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer'>
            <AiOutlineQuestionCircle size={'24px'} className='text-gray-600'/>
            </div>

            <div className='rounded-full p-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer'>
            <IoSettingsOutline size={'24px'} className='text-gray-600'/>
            </div>

            <div className='rounded-full p-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer'>
            <TbGridDots size={'24px'} className='text-gray-600'/>
            </div>
            <span className='bg-red-500 px-2 rounded-md text-white transition ease-in hover:bg-red-600 cursor-pointer py-1' onClick={handleLogout}>Logout</span>
            <Avatar src={user.profilePhoto} size="40" round={true} />
        </div>
            </>
        )}               
    </div>
  )
}

export default Navbar