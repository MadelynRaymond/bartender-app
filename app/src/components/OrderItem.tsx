import React from 'react'

export type OrderItem = {
    cocktailId: number,
    japaneseName: string,
    englishName: string,
    price: number,
    icon: string
}

interface OrderItemProps extends OrderItem {
    quantity: number
}
export default function OrderItem({japaneseName, englishName, price, icon, quantity}:OrderItemProps) {
  return (
        <div className="orderItem">
            <div  className="orderItemDetails">
                <div className="orderItemImg">
                    <img src={`./${icon}`} alt="" />
                </div>
                <div>
                    <p className="orderJpnTitle">{japaneseName}</p>
                    <p>{englishName}</p>
                    <p>{price}</p>
                </div>
            </div>
            <p>Quantity: {quantity}</p>
        </div>
  )
}


