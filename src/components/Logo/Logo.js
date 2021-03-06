import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import cssClasses from './Logo.module.css';

const logo = (props)=>(
    <div className={cssClasses.Logo}>
        <img src={burgerLogo} alt="myBurger"/>
    </div>
);

export default logo;