import React from "react";

import './Cart.css'

const Cart = props => {

    return <div className="backdrop">
    <div className="cartContainer">
        <p><b>CartItems</b></p>
        <div className="totalPrice">
            <h3>Total Amount</h3>
            <h3>44.25</h3>
        </div>
        <div >
            <div className="cartButtons">
            <button>Close</button>
            <button>Open</button>
            </div>
        </div>
    </div>
    </div>
}

export default Cart