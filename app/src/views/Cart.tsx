import axios from 'axios'
import React from 'react'
import OrderItem from '../components/OrderItem'


type Cocktail = {
    cocktailId: number,
    japaneseName: string,
    englishName: string,
    price: number,
    icon: string
  }

export default function Cart() {

    const [data, setData] = React.useState<Cocktail[]>([])

    const getCocktails = async () => {
      const {data} = await axios.get(`http://localhost:8080/Cocktails`)
      setData(data)
    }
    
    React.useEffect(() => {
      getCocktails()
    }, [])

  return (
    <div className="cartContainer">
        <div className="cart">
            <div className="cartTitles">
                <p>Order Summary</p>
                <p className="orderNote">Note: Pick-up not available. No drinking is allowed outside of the bar.</p>
            </div>
            <div className="orderItems">
                {data.length > 0 && data.map(cocktail => 
                <OrderItem key={cocktail.cocktailId} japaneseName={cocktail.japaneseName} englishName={cocktail.englishName} price={cocktail.price} icon={cocktail.icon} />)}
                
            </div>
            <div className="orderBar"></div>
            <div className="orderTotal">
                <button>Confirm Order</button>
                <div className="totals">
                    <p>Total: $80.02</p>
                    <p>Tax: $14.32</p>
                    <p className="grandTotal">Grand Total: $94.34</p>
                </div>

            </div>

        </div>
    </div>
  )
}
