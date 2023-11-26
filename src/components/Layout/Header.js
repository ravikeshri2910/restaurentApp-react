import React from "react";

import './Header.css'
import headerImage from '../../Images/meals.jpg'
import HeaderCartIcon from "./HeaderCartIcon";

const Header = props =>{

    return(
        <React.Fragment>
            <header className="header">
                <h1>
                    ReactMeals
                </h1>
                <HeaderCartIcon/>
            </header>
            <div className="imageBox">
                <img src={headerImage} alt="Disses "/>
            </div>
        </React.Fragment>
    )
}

export default Header