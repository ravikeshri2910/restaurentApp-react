import React,{useContext} from "react";

import './CartDeleteButton.css'
import CartContext from "../Store/CartContexts";

const CartDeleteButton = props => {
    const cartCtx = useContext(CartContext)

    const deleteQuantityHandler = () =>{
        cartCtx.removeItem({id : props.item.id , type : 'REMOVE'})
    }

    const addQuantityHandler = () =>{
        cartCtx.removeItem({id : props.item.id , type : 'ADD'})
    }

    const deleteItemHandler = () =>{
        cartCtx.removeItem({id : props.item.id , type : 'DELETE'})
    }

    return <div className="cartDeleteutton">
        <button className="deleteQuantity" onClick={deleteQuantityHandler}>
            -
        </button>
        <button className="addQuantity"  onClick={addQuantityHandler}>
            +
        </button>
        <button className="removeItem"  onClick={deleteItemHandler}>
            Del
        </button>

    </div>

}

export default CartDeleteButton