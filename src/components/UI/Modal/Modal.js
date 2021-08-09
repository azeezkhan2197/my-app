import React from 'react';
import cssClass from './Modal.module.css';

const modal = (props)=>{
    return(<div className={cssClass.Modal}>
        {props.children}
    </div>);
}

export default modal;