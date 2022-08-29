import React from 'react'

export default function OrderItem() {
  return (
        <div className="orderItem">
            <div  className="orderItemDetails">
                <div className="orderItemImg">
                    <img src={'./1small.PNG'} alt="" />
                </div>
                <div>
                    <p className="orderJpnTitle">ピンクマジック</p>
                    <p>PINK MAGIC</p>
                    <p>$12.50</p>
                </div>
            </div>
            <p>Quantity: 1</p>
        </div>
  )
}
