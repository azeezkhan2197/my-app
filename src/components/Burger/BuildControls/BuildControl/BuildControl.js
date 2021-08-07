import React from 'react';
import cssClass from './BuildControl.module.css';

const buildControl =(props)=>{
    return(
        <div className={cssClass.BuildControl}>
            <div className={cssClass.Label}>{props.label}</div>
            <button
                className={cssClass.Less} 
                onClick={props.remove}
                disabled={props.disabled}>Less</button>
            <button 
                className={cssClass.More} 
                onClick={props.added}>More</button>
        </div>
    )
}

export default buildControl