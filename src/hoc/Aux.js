import React from 'react'


const aux = (props) => props.children 
//Children is a special property that outputs whatever gets entered between the openeing and closing tags of this component
//will only returns props.children here

//this is an empty wrapper
//children will alwas refer to th4e content between opening and closing tag of component 
//aux outputs the content for us 
export default aux;

//tbh i dont love this either, but cool to know i guess

//review this 
//can only return one expression 

// we don;t even need the import React, because we dont have any JSX in here 

//this is a higher order component
//all it does is wrap another component, does not contain its own logic or styling
//this here is just a technical wrapper