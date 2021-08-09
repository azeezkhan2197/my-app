import React from 'react';
import Aux from '../../../hoc/Auxilary';

const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });
    return (
        <Aux>
            <h3>Order</h3>
            <p>Delicious burger with following items</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue Checkout</p>
        </Aux>
    )
}

export default orderSummary;