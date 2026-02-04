import { useState } from 'react'
import { Aboutme } from './pages/AboutMe'
import { Projects } from './pages/Projects'
import { Home} from './pages/Home'
import { Techstack} from './pages/Techstack'
import { Contact} from './pages/Contact'



import './App.css'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'



function App() {
const routes = createBrowserRouter([
  { path :"/" , element: <Home />},
  { path :"/AboutMe" , element: <Aboutme/>},
  { path : "/Techstack" , element : <Techstack />},
  { path :"/Projects" , element : <Projects/>},
  { path :"/contact" , element : < Contact/>},
  {
   path :"*" , element :<h1>404 PAge not found</h1> 
  }
]
)

  return (
    <>
    
      <RouterProvider router={routes}>
      
      </RouterProvider>
    </>
  )
}

export default App
