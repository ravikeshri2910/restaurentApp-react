

import React,{useState} from "react";
import Header from "./components/Layout/Header";
import MealsSummury from "./components/Meals/MealsSummury";
import AvailableMeals from "./components/Meals/AvailableMeals";
import CartProvider from "./components/Store/CartProvider";

import Model from "./components/UI/Model";
function App() {


  const [cartOpen , setCartOpen] = useState(false)

  const openCartHandler = () =>{
    setCartOpen(true)
  }

  const closeCartHandler = () =>{
  
    setCartOpen(false)
  }

  return (
    <CartProvider>
      <Header onCartOpen = {openCartHandler}/>
       <MealsSummury/>
      <main>
       <AvailableMeals/>
      </main>
     { cartOpen && <Model onCartClose = {closeCartHandler}/> }
    </CartProvider>
  );
}

export default App;
