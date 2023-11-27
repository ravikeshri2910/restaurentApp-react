

import React from "react";
import Header from "./components/Layout/Header";
import MealsSummury from "./components/Meals/MealsSummury";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
       <MealsSummury/>
      <main>
       <AvailableMeals></AvailableMeals>
      </main>
    </React.Fragment>
  );
}

export default App;
