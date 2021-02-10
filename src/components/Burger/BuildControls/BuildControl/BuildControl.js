import React from 'react';
import classes from './BuildControls.css';


const buildControl =(props)=>(
    <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button className='Less'>less</button>
        <button classname='More'>more</button>
    </div>
);
export default buildControl;