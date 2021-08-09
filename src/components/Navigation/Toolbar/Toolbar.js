import React from 'react';
import cssClass from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = (props)=> (
    <header className={cssClass.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;