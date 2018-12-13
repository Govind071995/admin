import React from 'react';
import './Person.css'
// import Radium from 'radium'
const person = (props) => {
    // let style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        <div className="Person" >
            <p onClick={props.delete}> I'm {props.name}, and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

// export default Radium(person);

export default person;