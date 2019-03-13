import React from 'react';
import classes from './Person.css';

const person = (props) => {
const rnd = Math.random();

if(rnd > 0.7) {
    throw new Error('Error occured');
}
    return (

    <div className={classes.person}>
        <p onClick={props.delete}>I'm {props.name}. I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

export default person;