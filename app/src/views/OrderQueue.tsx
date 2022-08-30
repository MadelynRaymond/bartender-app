import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QueueItem, { QueueItemProps } from '../components/QueueItem'
import axios from 'axios'
import Order from '../components/Order'



export default function OrderQueue() {

    const [data, setData] = React.useState<any[]>([])

    const getOrders = async () => {
      const {data} = await axios.get(`http://localhost:8080/Orders`)
      setData(data)
    }
    
    React.useEffect(() => {
      getOrders()
    }, [])

  return (
    <div className="cartContainer">
    <div className="cart currentOrders">
        <div className="cartTitles">
            <p className="currentOrders">Order Queue</p>
        </div>
        <div className="orderItems">
        {data.length > 0 && data.map(order => 
        <Order key={order.orderId} orderId={order.orderId} contains={order.contains}/>)}
        </div>
    </div>
</div>
  )
}
