import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

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
            <p>Total Price :<strong>{props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;