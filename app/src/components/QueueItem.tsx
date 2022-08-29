import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function QueueItem() {
  return (
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
  )
}
