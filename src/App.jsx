import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Projects } from './pages/Projects'
import { Techstack } from './pages/Techstack'
import { Contact } from './pages/Contact'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutMe /> },
  { path: "/techstack", element: <Techstack /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <h1>404 Page Not Found</h1> },
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
