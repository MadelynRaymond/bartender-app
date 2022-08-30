import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { OrderItem } from './OrderItem'


export type QueueItemProps = {
  orderId: number,
  cocktail: OrderItem,
  quantity: number
}
export default function QueueItem({cocktail, quantity, orderId}:QueueItemProps) {
  return (
    <div className="orderItem">
      <div  className="orderItemDetails">
          <div className="orderItemImg">
              <img src={`./${cocktail.icon}`} alt="" />
          </div>
          <div>
              <p className="orderJpnTitle">{cocktail.japaneseName}</p>
              <p>{cocktail.englishName}</p>
              <p>Quantity: {quantity}</p>
          </div>
      </div>
      <div className="orderItemRight">
          <div><button><FontAwesomeIcon icon={faCheck} /></button></div>
          <p>Order #{orderId}</p>
      </div>
    </div>
  )
}
