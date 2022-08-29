import React from 'react'
import '../App.css'

export default function CocktailMenu() {
  return (
    <div>
        <div className="menuContent">
        <h1>Signature Cocktails</h1>
        <div className="cocktails">
          <div style={{backgroundImage: 'url("./1.PNG")'}} className="cocktail">
            <div className="cocktailNames">
              <p className="japaneseName">ピンクマジック</p>
              <p className="englishName"> PINK MAGIC</p>
              <p className="price">$12.50</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div style={{backgroundImage: 'url("./2.PNG")'}} className="cocktail">
            <div className="cocktailNames">
              <p className="japaneseName">ピンクマジック</p>
              <p className="englishName"> PINK MAGIC</p>
              <p className="price">$12.50</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div style={{backgroundImage: 'url("./3.PNG")'}} className="cocktail">
            <div className="cocktailNames">
              <p className="japaneseName">ピンクマジック</p>
              <p className="englishName"> PINK MAGIC</p>
              <p className="price">$12.50</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div style={{backgroundImage: 'url("./4.PNG")'}} className="cocktail">
            <div className="cocktailNames">
              <p className="japaneseName">ピンクマジック</p>
              <p className="englishName"> PINK MAGIC</p>
              <p className="price">$12.50</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div style={{backgroundImage: 'url("./5.PNG")'}} className="cocktail">
            <div className="cocktailNames">
              <p className="japaneseName">ピンクマジック</p>
              <p className="englishName"> PINK MAGIC</p>
              <p className="price">$12.50</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div style={{backgroundImage: 'url("./6.PNG")'}} className="cocktail">
            <div className="cocktailNames">
              <p className="japaneseName">ピンクマジック</p>
              <p className="englishName"> PINK MAGIC</p>
              <p className="price">$12.50</p>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
