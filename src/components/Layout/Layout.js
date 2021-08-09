import React from 'react';
import Aux from '../../hoc/Auxilary';
import cssClasses from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <div className={cssClasses.content}></div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;