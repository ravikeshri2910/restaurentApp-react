import React, {Fragment} from "react";
import  ReactDOM  from 'react-dom';

import Cart from "../Cart/Cart";

const Model = () =>{

    const overLay = document.getElementById('overLay')
    return (
        <Fragment>
            {ReactDOM.createPortal(<Cart/>,overLay )}
        </Fragment>
    )

}

export default Model