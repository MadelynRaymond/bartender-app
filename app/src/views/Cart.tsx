import React from 'react'
import OrderItem from '../components/OrderItem'

export default function Cart() {
  return (
    <div className="cartContainer">
        <div className="cart">
            <div className="cartTitles">
                <p>Order Summary</p>
                <p className="orderNote">Note: Pick-up not available. No drinking is allowed outside of the bar.</p>
            </div>
            <div className="orderItems">
                <OrderItem />
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
