import { useState } from 'react'
import { Aboutme } from './pages/AboutMe'
import { Projects } from './pages/Projects'
import { Home} from './pages/Home'
import { Techstack} from './pages/Techstack'
import { Contact} from './pages/Contact'



import './App.css'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'



function App() {


  return (
    <>
    <h1>Hello</h1>
      <RouterProvider router={routes}>
      
      </RouterProvider>
    </>
  )
}

export default App
