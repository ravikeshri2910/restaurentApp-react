import React,{useContext , useState} from "react"

import './HeaderCartIcon.css'

import CartIcon from '../../Images/icons8-cart (1).gif'
import CartContext from '../Store/CartContexts'

const HeaderCartIcon = props => {

    // const cartCtx = useContext(CartContext)

    //  const [n,setN]= useState(0)

    
    const cartCtx = useContext(CartContext); //4 //whenver context changes it is reevaluated
    let quantity = cartCtx.items.length;
    // cartCtx.items.forEach((item) => {
    //     quantity = quantity + +item.quantity;
    // });
    console.log('CartContext hhhh' + quantity)
  // const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
  //   return currNumber + item.amount;
  // }, 0);

    
    // const numberOfCartItem = cartCtx.items.reduce((curNumber , item)=>{
    //     return curNumber+item.amount
    // },0)

    // const numberOfCartItem = setN(cartCtx.items.length)

    // console.log('cartCtx' + numberOfCartItem)

    return (
        <button className="cartButton" onClick={props.onClickCart}>
            <span className="cartIcon">
                <img src={CartIcon} alt="Cart"/>
            </span>
            <span className="your-cart">Your Cart</span>
            <span className="number">
                {quantity}
            </span>
        </button>
    )
}

export default HeaderCartIcon