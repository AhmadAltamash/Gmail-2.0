import React from 'react'
import { Inbox, Navbar, Sidebar } from './components'

const App = () => {
  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <Inbox/>
      </div>
    </div>
  )
}

export default App