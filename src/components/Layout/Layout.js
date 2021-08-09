import React from 'react';
import Aux from '../../hoc/Auxilary';
import cssClasses from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div className={cssClasses.content}></div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;