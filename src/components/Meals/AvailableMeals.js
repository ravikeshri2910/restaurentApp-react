import React from "react"
import './AvailableMeals.css'

import MealForm from "./MealForm"

const Dummy_Meals = [
    {
        id: 'm1',
        name: 'Dosa',
        description: 'Finnest Masala',
        price: 60
    },
    {
        id: 'm2',
        name: 'Chawmin',
        description: 'Testy chineese',
        price: 80
    },
    {
        id: 'm3',
        name: 'Chapati',
        description: 'Like home made',
        price: 20
    },
    {
        id: 'm4',
        name: 'Veggi',
        description: 'Fresh vegies',
        price: 70
    },
    {
        id: 'm5',
        name: 'Chiken',
        description: 'Fresh vegies',
        price: 70
    },
    {
        id: 'm6',
        name: 'Mutton',
        description: 'Fresh vegies',
        price: 70
    },
]
const AvailableMeals = (props) => {

    const meals = Dummy_Meals.map((meal) => {
        return (
            <>
            <div className="listContainer">
                <div>
                    <ul className="list" key={meal.id}>
                        <li><b>{meal.name}</b></li>
                        <li><i>{meal.description}</i></li>
                        <li><b>Rs-{meal.price}</b></li>
                       
                    </ul>
                </div>
                <div className="mealForm">
                    <MealForm item = {meal}/>
                </div>
               
            </div><hr/>
            </>
        )
    })

    return (
        <div className="mealsList">

            {meals}
           

        </div>
    )
}

export default AvailableMeals
