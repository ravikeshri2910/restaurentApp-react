import React, {Fragment} from "react";
import  ReactDOM  from 'react-dom';

import Cart from "../Cart/Cart";

const Model = (props) =>{

    const overLay = document.getElementById('overLay')
    return (
        <Fragment>
            {ReactDOM.createPortal(<Cart onClickClose={props.onCartClose}/>,overLay )}
        </Fragment>
    )

}

export default Model