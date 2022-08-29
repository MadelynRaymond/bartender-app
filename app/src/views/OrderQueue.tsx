import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QueueItem from '../components/QueueItem'

export default function OrderQueue() {
  return (
    <div className="cartContainer">
    <div className="cart currentOrders">
        <div className="cartTitles">
            <p className="currentOrders">Order Queue</p>
        </div>
        <div className="orderItems">
            <QueueItem />
            
        </div>
    </div>
</div>
  )
}
