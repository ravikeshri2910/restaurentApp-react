
import React from "react";

const addItemHandler = (item) => {
    // Implement logic to add item to the cart
    console.log("Item added to cart:", item);
};

const CartContext = React.createContext({
    items: [],
    addItem: item =>{},
    removeItem: (id) => {},
});

export default CartContext;