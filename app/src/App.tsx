import { useState } from 'react'
import './App.css'
import CocktailMenu from './views/CocktailMenu'
import LandingPage from './views/LandingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
    </>
  )
}

export default App
