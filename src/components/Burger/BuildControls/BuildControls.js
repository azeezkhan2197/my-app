import React from 'react';
import cssClasses from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label :'Salad' , type: 'salad'},
    {label :'Cheese' , type: 'cheese'},
    {label :'Meat' , type: 'meat'},
    {label :'Bacon' , type: 'bacon'},
]

const buildControls = (props) => {
    
    return(
        <div class={cssClasses.BuildControls}>
            <div>Total Price = <strong>{props.totalPrice.toFixed(2)}</strong></div>
            {controls.map(ctrl => (
                <BuildControl 
                    label = {ctrl.label}
                    key={ctrl.type}
                    added={()=>props.ingredientAdded(ctrl.type)}
                    remove={()=>props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
            ))}      
        </div>
    )
}

export default buildControls;