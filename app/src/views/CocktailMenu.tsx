import React from 'react'
import '../App.css'
import axios from 'axios'

import Cocktail from '../components/Cocktail'


type Cocktail = {
  cocktailId: number,
  japaneseName: string,
  englishName: string,
  price: number,
  img: string
}

export default function CocktailMenu() {

  const [data, setData] = React.useState<Cocktail[]>([])

  const getCocktails = async () => {
    const {data} = await axios.get(`http://localhost:8080/Cocktails`)
    setData(data)
  }
  
  React.useEffect(() => {
    getCocktails()
  }, [])

  return (
    <div>
        <div className="menuContent">
          <h1>Signature Cocktails</h1>
        <div className="cocktails">
          {data.length > 0 && data.map(cocktail => 
          <Cocktail key={cocktail.cocktailId} japaneseName={cocktail.japaneseName} englishName={cocktail.englishName} price={cocktail.price} img={cocktail.img} />)}
        </div>
      </div>
    </div>
  )
}
