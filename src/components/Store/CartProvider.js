
import React, { useState } from "react";
import CartContext from './CartContexts'

const CartProvider = (props) => {

    const [items, updateItems] = useState([])

    const addItemHandler = (newItems) => {
        // cartContext.items.push(item)
        //updateItems([...items ,item]) //old items

        updateItems((items)=>{
            const index = items.findIndex((i)=> i.id == newItems.id)

            console.log('items'+ items)
            if(index >= 0){
                items[index].quantity += Number(newItems.quantity)
                return[...items]
            }
            else{
                return[...items, newItems ]
            }
        })
        // Implement logic to add item to the cart
       // console.log("Item added to cart:", item);
    };

    const removeItemHandler = (id) => {
        // Implement logic to remove item from the cart
        console.log("Item removed from cart:", id);
    };

    const cartContext = {
        items: items, // Array of cart items
        totalAmount: 4, // Total amount in the cart
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return  <CartContext.Provider value={cartContext}>
           { console.log("Inside cartContext.provoder:", cartContext)}
            {props.children}
        </CartContext.Provider>
    
};

export default CartProvider;
