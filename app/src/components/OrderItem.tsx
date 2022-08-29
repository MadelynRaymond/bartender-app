import React from 'react'

type OrderItemProps = {
    japaneseName: string,
    englishName: string,
    price: number,
    icon: string
}
export default function OrderItem({japaneseName, englishName, price, icon}:OrderItemProps) {
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
            <p>Quantity: 1</p>
        </div>
  )
}
