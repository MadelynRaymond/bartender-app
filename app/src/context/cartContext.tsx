import React from "react";
import { OrderItem } from "../components/OrderItem";

export type CartContextType = {
    addToCart: (cocktail: OrderItem) => void
    removeFromCart: (id: number) => void
    condensedCart: any[]
}



export const CartContext = React.createContext<CartContextType | null>(null)

type CartContextProps = {
    value?: CartContextType
    children?: React.ReactNode
}


const CartProvider = ({children}: CartContextProps) => {
    const [cart, setCart] = React.useState<any[]>([])
    const [condensedCart, setCondensedCart] = React.useState<any[]>([])

   

    React.useEffect(()=>{
        const condensed = condenseCart()
        setCondensedCart(condensed)
    }, [cart])


    function condenseCart(){
        const c = cart.reduce((cartItems: any[], nextItem: any) => {
            const foundItem = cartItems.find((item: any) => {
                if(item.cocktail){
                    return item.cocktail.cocktailId === nextItem.cocktailId
                }
                return undefined
            })

            if(foundItem){
                foundItem.quantity += 1
            }
            else {
                cartItems.push({cocktail: nextItem, quantity: 1})
            }

            return cartItems
        }, [])

        return c
        
    }

    
    function addToCart(cocktail: OrderItem){
        setCart([...cart, cocktail])
    }

    function removeFromCart(id: number){

    }



    return <CartContext.Provider value={{addToCart, removeFromCart, condensedCart}}>{children}</CartContext.Provider>
}

export default CartProvider