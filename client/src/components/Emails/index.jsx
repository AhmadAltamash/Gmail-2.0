import React from 'react'
import Email from './Email'
import useGetAllMails from '../../hooks/useGetAllMails'
import { useSelector } from 'react-redux'

const Emails = () => {
  useGetAllMails()
  const { email } = useSelector(store => store.app)
  return (
    <div>
      {
        email && email?.map((email) => <Email key={email._id} email={email}/>)
      }
    </div>
  )
}

export default Emails