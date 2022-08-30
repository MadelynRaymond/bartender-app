import React from 'react'
import { CartContext, CartContextType } from '../context/cartContext'
import { ModalContext, ModalContextType } from '../context/modal'
import { OrderItem } from './OrderItem'

export type CocktailProps = {
    cocktailId: number,
    japaneseName: string,
    englishName: string,
    price: number,
    img: string,
    icon: string
}

export default function Cocktail(props:CocktailProps) {

  const {addToCart} = React.useContext(CartContext) as CartContextType
  const {setModalOpen} = React.useContext(ModalContext) as ModalContextType

  function handleClick(){
    addToCart(props as OrderItem)
    setModalOpen()
  }

  return (
    <div>
        <div style={{backgroundImage: `url("./${props.img}")`}} className="cocktail">
            <div className="cocktailNames">
                <p className="japaneseName">{props.japaneseName}</p>
                <p className="englishName">{props.englishName}</p>
                <p className="price">${props.price}</p>
            </div>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    </div>
  )
}
