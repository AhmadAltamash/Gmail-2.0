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
      <div className='absolute w-[250px] sm:w-[400px] bottom-0 -right-36 sm:right-20 z-10'>
        <Compose/>
      </div>
    </div>
  )
}

export default App