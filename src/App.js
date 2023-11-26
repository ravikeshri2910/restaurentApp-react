

import React from "react";
import Header from "./components/Layout/Header";
import MealsSummury from "./components/Meals/MealsSummury";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
       <MealsSummury/>
      </main>
    </React.Fragment>
  );
}

export default App;
