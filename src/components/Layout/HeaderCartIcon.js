import React from "react"

import './HeaderCartIcon.css'

import CartIcon from '../../Images/icons8-cart (1).gif'
// import CartIcon from '../../Images/icons8-cart (1).gif'

const HeaderCartIcon = props => {
    return (
        <button className="cartButton">
            <span className="cartIcon">
                <img src={CartIcon} alt="Cart"/>
            </span>
            <span className="your-cart">Your Cart</span>
            <span className="number">
                3
            </span>
        </button>
    )
}

export default HeaderCartIcon