import axios from 'axios'
import React from 'react'
import OrderItem from './OrderItem'
import Modal from 'react-modal'
import { CartContext, CartContextType } from '../context/cartContext'
import { ModalContext, ModalContextType } from '../context/modal'


type Cocktail = {
    cocktailId: number,
    japaneseName: string,
    englishName: string,
    price: number,
    icon: string
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export default function Cart({open, closeCart}: {open: boolean, closeCart: () => void}) {
    const {condensedCart} = React.useContext(CartContext) as CartContextType

    const postOrder = async (orderItems: any[]) => {

      await axios.post('http://localhost:8080/Orders', {contains: [...orderItems]})
    }

    const close = () => {
      closeCart()
    }
    const confirmOrder = async () => {
      const orderItems = condensedCart.map((item) => ({cocktailId: item.cocktail.cocktailId, quantity: item.quantity}))
      await postOrder(orderItems)
      close()
    }

  return (
    <div className="cartContainer">
        <Modal
        isOpen={open}
        onRequestClose={close}
        style={customStyles}
        >
            <div className="cart">
                <div className="cartTitles">
                    <p>Order Summary</p>
                    <p className="orderNote">Note: Pick-up not available. No drinking is allowed outside of the bar.</p>
                </div>
                <div className="orderItems">
                    {condensedCart.length > 0 && condensedCart.map(item =>
                    <OrderItem 
                      key={item.cocktail.cocktailId} 
                      cocktailId={item.cocktail.cocktailId} 
                      japaneseName={item.cocktail.japaneseName} 
                      englishName={item.cocktail.englishName} 
                      price={item.cocktail.price} 
                      icon={item.cocktail.icon}
                      quantity={item.quantity} 
                      />)}
            
                </div>
                <div className="orderBar"></div>
                <div className="orderTotal">
                    <button onClick={confirmOrder}>Confirm Order</button>
                    <div className="totals">
                        <p>Total: $80.02</p>
                        <p>Tax: $14.32</p>
                        <p className="grandTotal">Grand Total: $94.34</p>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}
