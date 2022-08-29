import React from 'react'
import '../App.css'
import Cocktail from '../components/Cocktail'



export default function CocktailMenu() {
  return (
    <div>
        <div className="menuContent">
          <h1>Signature Cocktails</h1>
        <div className="cocktails">
          <Cocktail japaneseName="ピンクマジック"  englishName='PINK MAGIC' price={12.5} img='url("./1.PNG")' />
        </div>
      </div>
    </div>
  )
}
