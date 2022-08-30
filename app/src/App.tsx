import { faMartiniGlass, faCartShopping, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import CocktailMenu from './views/CocktailMenu'
import LandingPage from './views/LandingPage'
import Login from './views/Login'
import OrderQueue from './views/OrderQueue'
import Modal from 'react-modal';
import React from 'react'
import { ModalContext, ModalContextType } from './context/modal'


function App() {

  const {setModalOpen} = React.useContext(ModalContext) as ModalContextType

  return (
    <>
      
      <BrowserRouter>
      <div className="nav">
          <NavLink to="/"><p className="title">NEON ネオン</p></NavLink>
          <div className="navRight">
              <NavLink to="/Menu"><p>Menu  <FontAwesomeIcon icon={faMartiniGlass} /></p></NavLink>
              <NavLink to="/Menu"><p onClick={() => setModalOpen()} style={{color: 'black', cursor: 'pointer'}}>Cart <FontAwesomeIcon icon={faCartShopping} /></p></NavLink>
              <NavLink to="/OrderQueue"><p>Staff  <FontAwesomeIcon icon={faUserTie} /></p></NavLink>
          </div>
      </div>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/Menu" element={<CocktailMenu/>}></Route>
          <Route path="/StaffLogin" element={<Login/>}></Route>
          <Route path="/OrderQueue" element={<OrderQueue/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
