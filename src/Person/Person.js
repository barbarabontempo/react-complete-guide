import React from 'react'
import './Person.css'
//in its simplest form a component is just a function that returns some JSX/HTML
//we are using ES6, we will create function using const keyword and arrow function

//props: attributes you add to your component
//They are read-only components which must be kept pure i.e. immutable. 
//They are always passed down from the parent to the child components throughout the application.
//A child component can never send a prop back to the parent component. 
//This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data

const Person = (props) => {

    return (
        <div className="Person"> 
            <p onClick={props.click}> I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p> 
            {/* children any element between the opneing and closing tag of our component.  */}
            <input type="text" onChange={props.changed} value={props.name}/> 
            {/* onChange fired whenever the value iin the input changes */}
        </div>
    )
    //if you have dynamic content in JSX, which we want to run as JS code and not as text, we need to wrap it in single curly brackets {}
    //we can execute short simple expressions 
    //you can call a function here that does more complex stuff
    //super reusable code 

    
}

export default Person 