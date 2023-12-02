import React,{useContext , useState , useEffect} from "react";

import './Cart.css'
import CartContext from "../Store/CartContexts";
import CartDeleteButton from "./CartDeleteButton";

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Calculate total price when cart items change
        const totalPrice = cartCtx.items.reduce((total, meal) => {
            const price = parseFloat(meal.price);
            return total + price * meal.quantity;
        }, 0);
        setTotalPrice(totalPrice);
    }, [cartCtx.items]);

    // console.log('cartMeals' + JSON.stringify(cartCtx))
    const cartMeals = cartCtx.items.map((meal) => {
    
        return ( 
            <>
            <div className="listContainer">
                <div>
                    <ul className="list" key={meal.id}>
                        <li><b>{meal.name}</b></li>
                        <li><b><span>{meal.price} x{meal.quantity}</span></b></li>
                        <li>Price {meal.quantity * meal.price}</li>
                       
                    </ul>
                </div>
                <div className="mealForm">
                    <CartDeleteButton item ={meal}></CartDeleteButton>
                </div>
               
            </div><hr/>
            </>
        )
    })

    return <div className="backdrop">
    <div className="cartContainer">
        {cartMeals}
        { console.log('cartMeals' + (cartCtx))}
        <div className="totalPrice">
            <h3>Total Amount</h3>
            <h3>Rs-{totalPrice}</h3>
        </div>
        <div >
            <div className="cartButtons">
            <button onClick = {props.onClickClose}>Close</button>
            <button>Open</button>
            </div>
        </div>
    </div>
    </div>
}

export default Cart