import React from "react";

import './MealForm.css'

const MealForm = props => {

    const formHandler = event => {
        event.preventDefault()
    }

    return <form onSubmit={formHandler}>
        <div>
            <label>Amount</label>
            <input></input>
        </div>
        <button type="submit">+Add</button>
    </form>
}

export default MealForm