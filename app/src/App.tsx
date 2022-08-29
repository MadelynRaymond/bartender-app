import { useState } from 'react'
import './App.css'
import CocktailMenu from './views/CocktailMenu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CocktailMenu />
    </>
  )
}

export default App
