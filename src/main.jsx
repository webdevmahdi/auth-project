import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Friends from './components/Friends/Friends.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import FriendDetails from './components/Friends/Friend/FriendDetails/FriendDetails'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
    ],
    errorElement: <ErrorPage />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
