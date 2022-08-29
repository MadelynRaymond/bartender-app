import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import CocktailMenu from './views/CocktailMenu'
import LandingPage from './views/LandingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <div className="nav">
          <NavLink to="/"><p className="title">Neon <FontAwesomeIcon icon={faMartiniGlass} /></p></NavLink>
          <div className="navRight">
              <NavLink to="/Menu"><p>Menu</p></NavLink>
              <NavLink to="/Cart"><p>Cart</p></NavLink>
              <NavLink to="/OrderQueue"><p>Staff</p></NavLink>
          </div>
      </div>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/Menu" element={<CocktailMenu/>}></Route>
          <Route path="/Cart" element={<CocktailMenu/>}></Route>
          <Route path="/StaffLogin" element={<CocktailMenu/>}></Route>
          <Route path="/OrderQueue" element={<CocktailMenu/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
