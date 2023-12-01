
import React, { useContext , useRef ,useState} from "react";
import CartContext from "../Store/CartContexts";
import Input from "../UI/Input";
import './MealForm.css'

const MealForm = (props) => {
    const cartContext = useContext(CartContext);

    const [quantityContainer , setQuantityContainer] = useState(0)

    const quantityHandler = (event) =>{
        event.preventDefault()
        setQuantityContainer(+(event.target.value))
        // console.log('jkjkjkj')
    }

    // const quantityContainer = useRef(1)

    // console.log('quantityContainer'  , quantityContainer.current )

    const formHandler = (event) => {

        event.preventDefault();
        //cartContext.items.push(props.item) // update cart items
         //const quantity = +document.getElementById('inputValue').value

        cartContext.addItem({ ...props.item, quantity: quantityContainer }); // Assuming the item to be added
        //document.getElementById('inputValue').value = ''

        //console.log('here', props.item)
    };

    return (
        <form>
            <div>
                <label>Amount</label>
                <input id="inputValue" value={quantityContainer} onChange={quantityHandler}></input>
                {/* <Input input={{ id: "inputValue", type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' , value : {quantityContainer}}} /> */}
            </div>
            <button type="submit" onClick={formHandler}>
                +Add
            </button>
        </form>
    );
};

export default MealForm;
