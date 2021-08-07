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
            {controls.map(ctrl => (
                <BuildControl label = {ctrl.label} key={ctrl.type}/>
            ))}      
        </div>
    )
}

export default buildControls;