import React from 'react';
import cssClass from './BuildControl.module.css';

const buildControl =(props)=>{
    return(
        <div className={cssClass.BuildControl}>
            <div className={cssClass.Label}>{props.label}</div>
            <button className={cssClass.Less}>Less</button>
            <button className={cssClass.More}>More</button>
        </div>
    )
}

export default buildControl