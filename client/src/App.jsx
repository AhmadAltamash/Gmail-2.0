import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Body, Compose, Emails, Inbox, Mail, Navbar, Sidebar } from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />,
      },
      {
        path: '/mail/:id',
        element: <Mail />,
      },
    ]
  }
])

const App = () => {
  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <Navbar/>
      <RouterProvider router={router}/>
      <div className='absolute w-[38%] bottom-0 right-20 z-10'>
        <Compose/>
      </div>
    </div>
  )
}

export default App