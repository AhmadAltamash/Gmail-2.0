import React from 'react'
import { MdCropSquare, MdStarBorder } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setSelectedEmail } from '../../redux/appSlice';

const Email = ({email}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(setSelectedEmail(email));
        navigate(`/mail/${email._id}`)
    }

  return (
    <div onClick={openMail} className='flex items-center justify-between border-b-gray-300 px-4 py-3 text-small hover:cursor-pointer hover:shadow-md transition-all duration-200'>
        <div className='flex items-center gap-2'>
            <div className='text-gray-500'><MdCropSquare size={'16px'}/></div>
            <div className='text-gray-500'><MdStarBorder size={'16px'}/></div>
            <div><p>{email?.subject}</p></div>
        </div>
        <div className='flex-1 ml-8'>
            <p>{email.message}</p>
        </div>
        <div className='flex-none text-gray-700 text-sm'><p>07:46 AM</p></div>
    </div>
  )
}

export default Email