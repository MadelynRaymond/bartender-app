import React from 'react'

type CocktailProps = {
    japaneseName: string,
    englishName: string,
    price: number,
    img: string
}

export default function Cocktail({japaneseName, englishName, price, img}:CocktailProps) {

  return (
    <div>
        <div style={{backgroundImage: `url("./${img}")`}} className="cocktail">
            <div className="cocktailNames">
                <p className="japaneseName">{japaneseName}</p>
                <p className="englishName">{englishName}</p>
                <p className="price">{price}</p>
            </div>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}
