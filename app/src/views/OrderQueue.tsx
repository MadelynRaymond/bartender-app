import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OrderQueue() {
  return (
    <div className="cartContainer">
    <div className="cart currentOrders">
        <div className="cartTitles">
            <p className="currentOrders">Current Orders</p>
        </div>
        <div className="orderItems">
            <div className="orderItem">
                <div  className="orderItemDetails">
                    <div className="orderItemImg">
                        <img src={'./1small.PNG'} alt="" />
                    </div>
                    <div>
                        <p className="orderJpnTitle">ピンクマジック</p>
                        <p>PINK MAGIC</p>
                        <p>Quantity: 1</p>
                    </div>
                </div>
                <div className="orderItemRight">
                    <div><button><FontAwesomeIcon icon={faCheck} /></button></div>
                    <p>Order #: 220</p>
                </div>
            </div>
            <div className="orderItem">
                <div  className="orderItemDetails">
                    <div className="orderItemImg">
                        <img src={'./1small.PNG'} alt="" />
                    </div>
                    <div>
                        <p className="orderJpnTitle">ピンクマジック</p>
                        <p>PINK MAGIC</p>
                        <p>Quantity: 1</p>
                    </div>
                </div>
                <div className="orderItemRight">
                    <div><button><FontAwesomeIcon icon={faCheck} /></button></div>
                    <p>Order #: 220</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
