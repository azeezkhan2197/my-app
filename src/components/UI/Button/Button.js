
import React from 'react';
import cssClasses from './Button.module.css';

const button= (props)=>(
    <button onClick={props.clicked} 
        className={[cssClasses.Button,cssClasses[props.btnType]].join(' ')}>
        {props.children}
    </button>
);

export default button;