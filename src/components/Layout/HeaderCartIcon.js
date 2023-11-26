import React from "react"

import './HeaderCartIcon.css'

import CartIcon from '../../Images/icons8-cart (1).gif'

const HeaderCartIcon = props => {
    return (
        <button className="cartButton">
            <div>
                <img src={CartIcon} alt="Cart"/>
            </div>
            <div className="your-cart">Your Cart</div>
            <div className="number">
                3
            </div>
        </button>
    )
}

export default HeaderCartIcon