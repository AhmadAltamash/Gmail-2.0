import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Body, Compose, Inbox, Login, Mail, Navbar, Signup } from './components'
import { Toaster } from 'react-hot-toast'

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
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
])

const App = () => {

  return (
    <div className='bg-[#F6F8FC] h-screen'>
      <RouterProvider router={router}/>
      <div className='absolute w-[250px] sm:w-[400px] bottom-0 -right-36 sm:right-20 z-10'>
        <Compose/>
      </div>
      <Toaster/>
    </div>
  )
}

export default App