import React from "react"

import './HeaderCartIcon.css'

import CartIcon from '../../Images/icons8-cart (1).gif'
import Cart from "../Cart/Cart"
// import CartIcon from '../../Images/icons8-cart (1).gif'

const HeaderCartIcon = props => {

    const cartButtonHandler = () =>{
        console.log('here')
        return
    }

    return (
        <button className="cartButton" onClick={cartButtonHandler}>
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