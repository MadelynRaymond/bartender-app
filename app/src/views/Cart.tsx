import React from 'react'

export default function Cart() {
  return (
    <div className="cartContainer">
        <div className="cart">
            <div className="cartTitles">
                <p>Order Summary</p>
                <p className="orderNote">Note: Pick-up not available. No drinking is allowed outside of the bar.</p>
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
                            <p>$12.50</p>
                        </div>
                    </div>
                    <p>Quantity: 1</p>
                </div>
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
