import React, { useEffect, useState } from 'react'
import Email from './Email'
import useGetAllMails from '../../hooks/useGetAllMails'
import { useSelector } from 'react-redux'

const Emails = () => {
  useGetAllMails()
  const { email, searchedText } = useSelector(store => store.app)
  const [filterEmail, setFilterEmail] = useState(email);

  useEffect(() => {
    const filteredEmail = email.filter((email) => {
      return email.subject.toLowerCase().includes(searchedText.toLowerCase()) || email.to.toLowerCase().includes(searchedText.toLowerCase()) || email.message.toLowerCase().includes(searchedText.toLowerCase())
    });
    setFilterEmail(filteredEmail);
  },[searchedText, email])
  return (
    <div>
      {
        filterEmail && filterEmail?.map((email) => <Email key={email._id} email={email}/>)
      }
    </div>
  )
}

export default Emails