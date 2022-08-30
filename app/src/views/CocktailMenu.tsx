import React from 'react'
import '../App.css'
import axios from 'axios'

import Cocktail, { CocktailProps } from '../components/Cocktail'
import Cart from '../components/Cart'
import { ModalContext, ModalContextType } from '../context/modal'


export default function CocktailMenu() {

  const [data, setData] = React.useState<CocktailProps[]>([])
  const {isOpen, setModalClosed} = React.useContext(ModalContext) as ModalContextType

  const getCocktails = async () => {
    const {data} = await axios.get(`http://localhost:8080/Cocktails`)
    setData(data)
  }
  
  React.useEffect(() => {
    getCocktails()
  }, [])

  return (
    <div>
        {<Cart open={isOpen} closeCart={setModalClosed}/>}
        <div className="menuContent">
          <h1>Signature Cocktails</h1>
        <div className="cocktails">
          {data.length > 0 && data.map(cocktail => 
          <Cocktail key={cocktail.cocktailId} 
                    cocktailId={cocktail.cocktailId}
                    japaneseName={cocktail.japaneseName} 
                    englishName={cocktail.englishName} 
                    price={cocktail.price} 
                    img={cocktail.img} 
                    icon={cocktail.icon}
          />)}
        </div>
      </div>
    </div>
  )
}
